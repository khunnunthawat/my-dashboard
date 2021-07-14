import React from 'react';

export default function AboutContent() {

  const say = 'I love <programming />';

  return (
    <>
      <h2 className='text-xl'>About</h2>
      <div className='pt-3'>
        <div className='p-5 border-1 bg-white rounded-2xl'>
          <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{say}</h2>
          <p>
            Currently, we have only <strong>JustSay</strong>,{' '}
            <strong>Counter</strong> and <strong>Timer</strong> widgets.
          </p>
          <p>You can now add more widgets or even destroy all of then :P</p>
          <p>
            Crafted with <span className='text-pink-500'>♥</span> by Eiffel.
          </p>
        </div>
      </div>
    </>
  );
}
