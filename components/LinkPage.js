import React, { Component } from 'react';
import Link from 'next/link';

class LinkPage extends Component {
  render() {
    return (
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <h1 className='text-4xl font-bold undefined'>Daytech Dashboard</h1>
        <div className='my-5'>
          <Link href='/'>
            <a className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'>
              Widgets
            </a>
          </Link>
          <Link href='/about'>
            <a className='inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100 hover:text-white hover:bg-gray-900 focus:outline-none'>
              About
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default LinkPage;
