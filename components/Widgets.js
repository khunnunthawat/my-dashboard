import React from 'react';
import JustSaycard from './JustSaycard';
import Timer from './Timer';
import Counter from './Counter';
import TimerTest from './TimerTest';

export default function Widgets() {
  return (
    <div>
      <h2 className='text-2xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='md:masonry'>
          <JustSaycard />
          <Counter />
          <Timer />
          <TimerTest />
        </div>
      </div>
    </div>
  );
}