import React, { useState } from 'react';
import Btn from '../Btn';
import { TextError } from '../Modals/TextHead';

export default function EditForm({ onEditSubmit, list, title }) {
  const [checkError, setCheckError] = useState('');

  let defaultValue = list.value;
  console.log('defaultValue weather :' + defaultValue);
  if (list.type === 'weather') {
    defaultValue = list.value.name;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.preventDefault());
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      if (list.type === 'justSay') {
        onEditSubmit(list.id, e.target.title.value.trim());
      } else if (list.type === 'justShout') {
        onEditSubmit(e.target.title.value.trim());
      } else if (list.type === 'weather') {
        onEditSubmit(e.target.title.value.trim());
      }
    }
  };

  return (
    <>
      <h2 className='text-xl mb-2'>Edit {title}</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            defaultValue={list.value}
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter text'
            defaultValue={defaultValue}
          />
        </div>
        <div>
          <Btn color='primary'> Add</Btn>
        </div>
      </form>
      <TextError>{checkError}</TextError>
    </>
  );
}
