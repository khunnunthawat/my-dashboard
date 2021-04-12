import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LinkPage() {
  const router = useRouter();

  function getLinkPage(pageName) {
    let navClass = 'inline-block px-4 py-1 mr-1.5 rounded-lg';
    if (router.pathname === pageName) {
      navClass = `${navClass} text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none`;
    } else {
      navClass = `${navClass} text-blue-500 bg-gray-100 hover:text-white hover:bg-gray-900 focus:outline-none`;
    }
    return navClass;
  }

  return (
    <div className='w-100 max-w-4xl mx-auto p-5'>
      <h1 className='text-4xl font-bold undefined'>Daytech Dashboard</h1>
      <div className='my-5'>
        <Link href='/'>
          <button className={getLinkPage('/')}>Widgets</button>
        </Link>
        <Link href='/about'>
          <button className={getLinkPage('/about')}>About</button>
        </Link>
      </div>
    </div>
  );
}