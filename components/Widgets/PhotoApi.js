import React, { useState } from 'react';
import { CardPhoto } from '../Layouts/Card';
import EditForm from '../AddWidgets/EditForm';
import { ModalCard } from '../Modals/ModalCard';
import { createApi } from 'unsplash-js';

export default function PhotoApi ({ list, onClickEdit, onClickDelete }) {
  const [modalActiveEdit, setModalActiveEdit] = useState(false);
  const [photo, setPhoto] = useState([]);

  const unsplash = createApi({
    // See https://unsplash.com/developers
    // https://github.com/unsplash/unsplash-js
    accessKey: 'WHryKKM8-ZDMJqMGMl9ExUDXmOFNODvHSKKtACBSWr8'
  });

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
          <EditForm title='Photo' onEditSubmit={onEditSubmit} list={list} />
        </ModalCard>
      )}
      <CardPhoto
        title='Photo'
        key={list.id}
        onClickDelete={handleClick}
        onClickEdit={handleClickEdit}
        list={list}
      >
        <div className='text-center mt-8 mb-12'>
          <h1 className='text-4xl font-bold'>{list.value}</h1>
        </div>
        <div className='card-list'>
          {photo.map((pic) => (
            <div className='card' key={pic.id}>
              <img
                className='card--image'
                alt={pic.alt_description}
                src={pic.urls.full}
                width='50%'
                height='50%'
              ></img>
            </div>
          ))}{' '}
        </div>
      </CardPhoto>
    </>
  );
}