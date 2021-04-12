import React from 'react';
import Card from '../components/Card';

export default function AboutContent() {
  return (
    <div className='w-100 max-w-4xl mx-auto p-5'>
      <h2 className='text-2xl'>About</h2>
      <div className='pt-3'>
        <Card title='I love <programming />'>
          <p>
            Currently, we have only <strong>JustSay</strong>,
            <strong>Counter</strong> and <strong>Timer</strong> Widgets
          </p>
          <p>
            Crafted with <span className='text-pink-500'>♥</span> by Eiffel.
          </p>
        </Card>
      </div>
    </div>
  );
}