import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget } from '../Modals/TextHead';

export default function FormWeather({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      onAdd('weather', e.target.title.value.trim());
    }
  };

  return (
    <>
      <TextHeadWidget title='Add Weather' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter a city'
          />
        </div>
        <div>
          <Btn color='primary'> Add</Btn>
        </div>
      </form>
      <div className='text-red-600 text-xs mt-1'>{checkError}</div>
    </>
  );
}
