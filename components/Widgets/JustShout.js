import React, { useState } from 'react';
import { CardEdit } from '../Layouts/Card';
import EditJustSay from '../AddWidgets/EditJustSay';
import { ModalCard } from '../Modals/ModalCard';

export default function JustShout({ list, onClickEdit, onClickDelete }) {
  const [modalActiveEdit, setModalActiveEdit] = useState(false);

  const handleCancel = function () {
    setModalActiveEdit(false);
  };

  const handleClick = function () {
    onClickDelete(list);
  };

  const handleClickEdit = function () {
    setModalActiveEdit(true);
  };

  const onEditSubmit = function (id, content) {
    onClickEdit(id, content);
    setModalActiveEdit(false);
  };

  return (
    <>
      {modalActiveEdit && (
        <ModalCard onCancel={handleCancel}>
          <EditJustSay onEditSubmit={onEditSubmit} list={list} />
        </ModalCard>
      )}
      <CardEdit
        title='JustShout'
        key={list.id}
        onClickDelete={handleClick}
        onClickEdit={handleClickEdit}
        list={list}
      >
        <div className='text-center mt-8 mb-12'>
          <h1 className='text-4xl font-bold'>{list.value}</h1>
        </div>
        <div className='text-xs text-gray-400'>
          <div className='mt-6 -mb-2 text-center'>{list.date}</div>
        </div>
      </CardEdit>
    </>
  );
}