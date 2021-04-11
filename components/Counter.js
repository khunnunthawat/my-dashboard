import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>Counter</h2>
        <div className='text-center'>
          <div className='flex items-center justify-center mt-4 mb-6'>
            <button className='text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300'>
              -
            </button>
            <div className='text-6xl mx-7'>0</div>
            <button className='text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500'>
              +
            </button>
          </div>
          <button className=' text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300'>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
