import React, { useState } from 'react';
import Btn from '../Btn';

export default function FormJustSay({
  handleAddWidgets,
  setTitleJustsay,
  handleCancel,
  listAllWidgets,
  setListAllWidgets,
  DateTime
}) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      setTitleJustsay(e.target.title.value.trim());
      handleCancel();

      let id;

      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop();
        id = lastArray.id + 1;
      }

      const data = {
        value: e.target.title.value.trim(),
        id: id,
        date: DateTime,
        type: 'justSay'
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  };

  return (
    <>
      <h2 className='text-xl mb-2'>Add JustSay</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter text'
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
