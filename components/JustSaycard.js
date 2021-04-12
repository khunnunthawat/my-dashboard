import React from 'react';
import Card from '../components/Card';

export default function JustSaycard() {
  return (
    <Card title='Just Say'>
      <div className='md:break-inside pb-4'>
        <div className='text-center my-8'>
          <h1 className='text-4xl font-bold'>{'Hello :)'}</h1>
        </div>
      </div>
    </Card>
  );
}