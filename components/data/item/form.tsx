import { useState } from 'react';
import { CloseIcon } from '../../../public/icons/close';
import { PencilIcon } from '../../../public/icons/pencil';
import { SaveIcon } from '../../../public/icons/save';
import { TrashIcon } from '../../../public/icons/trash';
import { MyContext } from '../../../src/contexts/mainContext';
import { IItem } from '../../../src/contexts/reducer';
import Input from '../input';
import * as S from './styles';

const ItemForm = ({ ...item }: IItem) => {
  const { toggleIsEditing, editItem } = MyContext();

  const [formState, setFormState] = useState(item);
  const { nickname = '', whattsapp = '', age = '', id } = formState || {};
  console.log(nickname);
  return (
    <S.ItemForm>
      <Input
        name="nickname"
        placeholder="Nickname"
        onChangeText={(v) => setFormState((old) => ({ ...old, nickname: v }))}
        value={nickname}
        autoFocus
      />

      <Input
        name="age"
        placeholder="Age"
        onChangeText={(v) => setFormState((old) => ({ ...old, age: ~~v }))}
        value={age}
        type="number"
      />
      <Input
        name="whatsapp"
        placeholder="Whatsapp number"
        onChangeText={(v) =>
          setFormState((old) => ({ ...old, whattsapp: ~~v }))
        }
        value={whattsapp}
        type="number"
      />
      <div className="buttons">
        <button onClick={() => editItem(formState)}>
          <SaveIcon />
        </button>
        <button onClick={() => toggleIsEditing(id)}>
          <CloseIcon />
        </button>
      </div>
    </S.ItemForm>
  );
};

export default ItemForm;
