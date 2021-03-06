import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

export default function Timer() {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00');
  }

  return (
    <Card title='Timer'>
      <div className='md:break-inside'>
        <div className='text-center'>
          <div className='flex items-center justify-center mt-4 mb-6'>
            <div className='text-6xl mx-7'>
              {minute}:{second}
            </div>
          </div>
          <button
            className={`inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none'
            onClick={stopTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </Card>
  );
}
