import React from 'react';
import JustSaycard from './JustSaycard'

const WidgetsCard = ({ children }) => {
  return (
    <div className='md:row-start-1 pb-4'>
      <div className='p-5 border-1 bg-white rounded-2xl'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>JustSay</h2>
        <JustSaycard />
      </div>
    </div>
  );
};


export default WidgetsCard;
