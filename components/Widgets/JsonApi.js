import React, { useState } from 'react';
import { CardEdit } from '../Layouts/Card';
import EditForm from '../AddWidgets/EditForm';
import { ModalCard } from '../Modals/ModalCard';

export default function JsonApi ({ list, onClickEdit, onClickDelete }) {
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
          <EditForm title='JSON' onEditSubmit={onEditSubmit} list={list} />
        </ModalCard>
      )}
      <CardEdit
        title='JSON'
        key={list.id}
        onClickDelete={handleClick}
        onClickEdit={handleClickEdit}
        list={list}
      >
        <div className='text-center mt-8 mb-12'>
          <h1 className='text-4xl font-bold'>{list.value}</h1>
        </div>
      </CardEdit>
    </>
  );
}