import React, { useState } from 'react';
import Card from '../components/Card';
import BtnGo from './BtnGo';

export default function Counter() {
  const [count, setCount] = useState(0);

  let clearCount;
  let decrease;

  let countCss = 'text-5xl rounded-full w-10 text-center focus:outline-none';
  let countBlue = 'text-blue-500';
  let countGray = 'text-gray-300';

  if (count == 0) {
    clearCount = <button><BtnGo check={'gray'} btnName='Reset' /></button>
    decrease = <button className={`${countCss} + ${countGray}`}>-</button>;
  } else {
    clearCount = <button onClick={ () => setCount(0)}><BtnGo check={'blue'} btnName='Reset' /></button>
    decrease = <button onClick={ () => setCount(count - 1)} className={`${countCss} + ${countBlue}`}>-</button>
  }

  return (
    <Card title='Counter'>
      <div className='md:break-inside pb-4'>
        <div className='text-center'>
          <div className='flex items-center justify-center mt-4 mb-6'>
            {decrease}
            <div className='text-6xl mx-7'>{count}</div>
            <button
              onClick={() => setCount(count + 1)}
              className={`${countCss} + ${countBlue}`}
            >
              +
            </button>
          </div>
          {clearCount}
        </div>
      </div>
    </Card>
  );
}
