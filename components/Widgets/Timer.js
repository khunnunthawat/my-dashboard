import React, { useState, useRef } from 'react';
import Card from '../Layouts/Card';
import Btn from '../Btn';

export default function TimerTest({ title, list, onClickDelete = () => {} }) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleClick = function () {
    onClickDelete(list);
  };

  let disabled = true;

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

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  list.value = timer;

  return (
    <Card title='Timer' onClickDelete={handleClick}>
      <div className='text-center space-x-1'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          <div className='text-6xl mx-7'>{formatTime(timer)}</div>
        </div>
        <>
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>
              <Btn disabled={!disabled} color='primary' btnName='Start' />
            </button>
          ) : isPaused ? (
            <button onClick={handlePause}>
              <Btn color='primary' btnName='Pause' />
            </button>
          ) : (
            <button onClick={handleResume}>
              <Btn color='primary' btnName='Resume' />
            </button>
          )}
          <button onClick={handleReset}>
            <Btn color='primary' btnName='Reset' />
          </button>
        </>
      </div>
      <div className='text-xs text-gray-400'>
        <div className='mt-6 -mb-2 text-center'>{list.date}</div>
      </div>
    </Card>
  );
}
