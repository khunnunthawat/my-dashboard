import React, { useState, useRef } from 'react';
import Card from '../components/Card';

export default function TimerTest(initialState = 0) {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return (
    <>
      <Card title='Timer'>
        <div className='md:break-inside'>
          <div className='text-center'>
            <div className='flex items-center justify-center mt-4 mb-6'>
              <div className='text-6xl mx-7'>{formatTime(timer)}</div>
            </div>
            <div className='buttons'>
              {!isActive && !isPaused ? (
                <button
                  className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'
                  onClick={handleStart}
                >
                  Start
                </button>
              ) : isPaused ? (
                <button
                  className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'
                  onClick={handlePause}
                >
                  Pause
                </button>
              ) : (
                <button
                  className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'
                  onClick={handleResume}
                >
                  Resume
                </button>
              )}
              <button
                className='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none'
                onClick={handleReset}
                disabled={!isActive}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
