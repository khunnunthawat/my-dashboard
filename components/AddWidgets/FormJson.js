import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';

export default function FormJson({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.url.value.trim().length < 3) {
      setCheckError('Please enter url : JSON');
      // console.log(e.target.url.value.length);
    } else {
      onAdd('justSay', e.target.url.value.trim());
    }
  };

  return (
    <>
      <TextHeadWidget title='Add JSON' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='url'
            type='url'
            pattern='https://.*'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter url JSON : '
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