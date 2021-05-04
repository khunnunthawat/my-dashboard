import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';
import { BiSearchAlt } from 'react-icons/bi';
import { createApi } from 'unsplash-js';

export default function FormPhoto({ onAdd }) {
  const [checkError, setCheckError] = useState('');
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState('');

   const unsplash = new createApi({
     // See https://unsplash.com/developers
     // https://github.com/unsplash/unsplash-js
     accessKey: 'WHryKKM8-ZDMJqMGMl9ExUDXmOFNODvHSKKtACBSWr8',
   });

  const onSubmit = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPhoto(json.results);
        console.log(json);
      });

    if (e.target.query.value.trim().length < 2) {
      setCheckError('Please enter search photo');
      // console.log(e.target.url.value.length);
    } else {
      onAdd('photoApi', e.target.query.value.trim());
    }
  };

  return (
    <>
      <TextHeadWidget title='Search Photo' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            // name='title'
            name='query'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Search free photos'
          />
        </div>
        <div>
          <Btn color='primary'>
            <BiSearchAlt className='mx-auto text-2xl' />
          </Btn>
        </div>
      </form>
      <TextError>{checkError}</TextError>
    </>
  );
}