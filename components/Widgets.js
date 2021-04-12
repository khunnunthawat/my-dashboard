import React from 'react';
import JustSaycard from './JustSaycard';
import Timer from './Timer';
import Counter from './Counter';

export default function Widgets() {
  return (
    <div className='w-100 max-w-4xl mx-auto p-5'>
      <h2 className='text-2xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='md:masonry'>
          <JustSaycard />
          <Counter />
          <Timer />
        </div>
      </div>
    </div>
  );
}