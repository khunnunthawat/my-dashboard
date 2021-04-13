import React from 'react';
import PageLink from './PageLink';

export default function Page() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Daytech Dashboard</h1>
      <div className='my-5'>
        <PageLink href='/' title='Widgets' />
        <PageLink href='/about' title='About' />
      </div>
    </div>
  );
}