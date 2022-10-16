import * as S from './styles';

import {
  Form,
  FormHandles,
  YupValidation,
  InputComponent,
  TextAreaComponent,
  SelectComponent,
} from 'components/data/inputs/core';
import { useRef } from 'react';
import { api } from 'src/services/api';
import router from 'next/router';
import { ButtonComponent } from '../button';

interface SubmitProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export function BoxContact() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ name, email, message, phone }: SubmitProps) {
    const Yup = await import('yup');

    try {
      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, '');

      const schema = Yup.object().shape({
        name: Yup.string().required('Por favor insira seu nome'),
        email: Yup.string()
          .email('e-mail inválido')
          .required('Por favor insira seu e-mail'),
        message: Yup.string().required('Por favor insira sua mensagem'),
        phone: Yup.string()
          .required('Por favor insira seu telefone')
          .min(11, 'Favor inserir um número válido'),
      });

      await schema.validate(
        { name, email, message, phone: phoneOnlyNumbers },
        {
          abortEarly: false,
        },
      );

      formRef.current?.setErrors({});

      const response = await api.post('form', {
        name,
        email,
        message,
        phone: phoneOnlyNumbers,
      });

      if (response.status === 200) {
        router.push({
          pathname: '/contato/sucesso',
          query: { name },
        });
      }
    } catch (err) {
      YupValidation(Yup, err, formRef);
    }
  }
  return (
    <S.BoxContact>
      <Form className="form" ref={formRef} onSubmit={handleSubmit} action="">
        <InputComponent
          label="Nome completo"
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome completo aqui"
        />
        <InputComponent
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu e-mail aqui"
        />
        <InputComponent
          label="Endereço"
          id="adress"
          name="adress"
          type="adress"
          placeholder="Digite aqui seu endereço"
        />
        <div className="phone-plan">
          <InputComponent
            label="Telefone"
            id="phone"
            name="phone"
            type="text"
            placeholder="(DDD) 99999-9999"
            mask="(99) 99999-9999"
          />
          <SelectComponent
            name="plano"
            label="Plano de interesse"
            optionsSelect={[]}
          />
        </div>
        <TextAreaComponent
          label="Mensagem"
          id="message"
          name="message"
          placeholder="O que deseja dizer?"
        />
        <div className="buttons">
          <div className="recaptcha"></div>
          <ButtonComponent
            backgroundColor="#f5cf2d"
            type="submit"
            text="Enviar"
          />
        </div>
      </Form>
    </S.BoxContact>
  );
}
