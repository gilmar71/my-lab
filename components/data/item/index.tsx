import React, { useState } from 'react';
import { PencilIcon } from '../../../public/icons/pencil';
import { TrashIcon } from '../../../public/icons/trash';
import { MyContext } from '../../../src/contexts/mainContext';
import { IItem } from '../../../src/contexts/reducer';
import ItemForm from './form';
import * as S from './styles';

interface IProps extends IItem {
  position: number;
}

const Item = ({
  position,
  nickname,
  whattsapp,
  age,
  id,
  isEditing = false,
}: IProps) => {
  const { deleteItem, toggleIsEditing } = MyContext();
  const handleClickEdit = () => {};
  const handleSubmit = () => {};

  return (
    <S.ItemComponent>
      <strong>{position}</strong>

      {isEditing ? (
        <ItemForm {...{ nickname, whattsapp, age, id, isEditing }} />
      ) : (
        <S.Item>
          <p>{nickname ?? <i>insert name</i>}</p>
          <p>{age ?? <i>insert age</i>}</p>
          <p>{whattsapp ?? <i>insert phone</i>}</p>
          <div className="buttons">
            <button onClick={() => toggleIsEditing(id)}>
              <PencilIcon />
            </button>
            <button onClick={() => deleteItem(id)}>
              <TrashIcon />
            </button>
          </div>
        </S.Item>
      )}
    </S.ItemComponent>
  );
};

export default Item;
