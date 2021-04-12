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
          <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
            <JustSaycard />
            <Timer />
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}

export default Widgets;
