import React from 'react'
import { TextHead } from '../Modals/TextHead';

export default function Settings() {
  return (
    <div>
      <TextHead>Settings</TextHead>
      <div className='p-5 border-1 bg-white rounded-2xl relative mb-4'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>Statistics</h2>
        <div className='table'>
          <div className='table-row'>
            <div className='table-cell pr-4 font-semibold'>Total widgets: </div>
            <div className='table-cell'>.</div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-4 font-semibold'>
              Total JustSay length:
            </div>
            <div className='table-cell'>.</div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-4 font-semibold'>Total count: </div>
            <div className='table-cell'>.</div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-4 font-semibold'>Total time: </div>
            <div className='table-cell'>.</div>
          </div>
        </div>
      </div>

      <div className='p-5 border-1 bg-white rounded-2xl relative mb-4'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>Reset Zone</h2>
        <div className='flex items-center'>
          <select className='flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm'>
            <option value='Counter'>All counters</option>
            <option value='Timer'>All timers</option>
          </select>
          <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600'>
            Set zero
          </button>
        </div>
      </div>

      <div className='p-5 border-1 bg-white rounded-2xl relative mb-4'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>Delete Zone</h2>
        <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1'>
          {'{'}' '{'}'}
          Delete all widgets
        </button>
      </div>
    </div>
  );
}
