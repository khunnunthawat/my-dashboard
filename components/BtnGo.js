import React from 'react';

export default function BtnGO({ title, children }) {
  return (
    <div className='my-5'>
      <div className='p-5 border-1 bg-white rounded-2xl'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{title}</h2>
        {children}
      </div>
    </div>
  );
}
