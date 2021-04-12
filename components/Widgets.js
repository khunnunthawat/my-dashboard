import React from 'react';
import JustSaycard from './JustSaycard';
import Timer from './Timer';
import Counter from './Counter';
import WidgetsCard from './WidgetsCard';

export default function Widgets() {
  return (
    <div className='w-100 max-w-4xl mx-auto p-5'>
      <h2 className='text-2xl undefined'>Widgets</h2>
      <div className='pt-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
          <WidgetsCard>
            <JustSaycard />
          </WidgetsCard>
          <Timer />
          <Counter />
        </div>
      </div>
    </div>
  );
}