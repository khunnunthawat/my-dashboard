import React, { useState } from 'react';
import Btn from '../Btn';

export default function FormJson({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  // Refactor code จากพี่บุ๊คกับบน้องเปิ้ลแนะแนวทาง การส่งค่า
  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.url.value.trim().length < 3) {
      setCheckError('Please enter url : JSON');
      // console.log(e.target.url.value.length);
    } else {
      onAdd('justSay', e.target.url.value.trim()); // เราใช้เพียงคำสั่งนี้ ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };

  return (
    <>
      <h2 className='text-xl mb-2'>Add JSON</h2>
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
      <div className='text-red-600 text-xs mt-1'>{checkError}</div>
    </>
  );
}