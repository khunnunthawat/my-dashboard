import React, { useState } from 'react';
import { CardEditRefresh } from '../Layouts/Card';
import EditForm from '../AddWidgets/EditForm';
import { ModalCard } from '../Modals/ModalCard';

export default function JustSay({ list, onClickEdit, onClickDelete }) {
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
          <EditForm title='Weather' onEditSubmit={onEditSubmit} list={list} />
        </ModalCard>
      )}
      <CardEditRefresh
        title='Weather'
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
        -----
        <div className='text-center'>
          <h3 className='text-xl font-bold capitalize'>Bangkok</h3>
          <h4 className='text-gray-400 -mt-1'>
            <i className='align-middle text-2xl mr-1.5 owi owi-10n' />
            <img
              className='h-12 w-12 '
              src={`http://openweathermap.org/img/wn/${list.value.weather[0].icon}@2x.png`}
              alt='logo'
            />
            <span className='align-middle'>light rain</span>
          </h4>
          <h2 className='text-gray-500 mt-1 text-5xl font-extralight'>28°</h2>
        </div>
        <div className='text-xs text-gray-400'>
          <div className='mt-6 -mb-2 text-center'>{list.date}</div>
        </div>
      </CardEditRefresh>
    </>
  );
}
