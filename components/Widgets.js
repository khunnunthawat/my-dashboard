import React, { Component } from 'react';
import JustSaycard from './JustSaycard';

class Widgets extends Component {
  render() {
    return (
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <h2 className='text-2xl undefined'>Widgets</h2>
        <div className='pt-3'>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-12 sm:col-span-6 md:col-span-3'>
              <div className='p-5  border-1 bg-white rounded-2xl'>
                <JustSaycard />
              </div>
            </div>
            <div className='col-span-12 sm:col-span-6 md:col-span-3'>
              <div className='p-5  border-1 bg-white rounded-2xl'>
                <JustSaycard />
              </div>
            </div>
            <div className='col-span-12 sm:col-span-6 md:col-span-3'>
              <div className='p-5  border-1 bg-white rounded-2xl'>
                <JustSaycard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widgets;
