import React, { Component } from 'react';
import JustSaycard from './JustSaycard';
import Timer from './Timer';
import Counter from './Counter';

class Widgets extends Component {
  render() {
    return (
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <h2 className='text-2xl undefined'>Widgets</h2>
        <div className='pt-3'>
          <div className='md:masonry'>
            <div className='grid grid-cols-6 gap-4'>
              <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                <JustSaycard />
              </div>
              <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                <Timer />
              </div>
              <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widgets;
