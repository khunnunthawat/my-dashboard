import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';
import openweather from '../../pages/api/openweather';

export default function FormJustSay({ onAdd, defaultValue }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      try {
        const res = await openweather.get('/data/2.5/weather', {
          params: {
            q: e.target.title.value,
            units: 'metric',
          },
        });

        const { data } = res;

        onAdd('weather : ', data);
      } catch {
        console.log('City not found');
      }
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