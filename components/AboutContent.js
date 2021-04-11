import React, { Component } from 'react';

class AboutContent extends Component {
  render() {
    return (
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <h2 className='text-2xl undefined'>About</h2>
        <div className='pt-3'>
          <div className='p-5  border-1 bg-white rounded-2xl'>
            <h2 className='text-lg font-bold text-gray-400 mb-1.5'>
              {'I love <programming />'}
            </h2>
            <p>
              Currently, we have only <strong>JustSay</strong>,
              <strong>Counter</strong> and <strong>Timer</strong> Widgets
            </p>
            <p>
              Crafted with <span className='text-pink-500'>♥</span> by Eiffel.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;