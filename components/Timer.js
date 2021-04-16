import React, { useState, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/BtnGo';

export default function TimerTest() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

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

  return (
    <>
      <Card title='Timer'>
        <div className='md:break-inside'>
          <div className='text-center'>
            <div className='flex items-center justify-center mt-4 mb-6'>
              <div className='text-6xl mx-7'>{formatTime(timer)}</div>
            </div>
            <>
              {!isActive && !isPaused ? (
                <button onClick={handleStart}>
                  <Button check={'blue'} btnName='Start' />
                </button>
              ) : isPaused ? (
                <button onClick={handlePause}>
                  <Button check={'blue'} btnName='Pause' />
                </button>
              ) : (
                <button onClick={handleResume}>
                  <Button check={'blue'} btnName='Resume' />
                </button>
              )}
              <button
                onClick={handleReset}
                disabled={!isActive}
              >
                <Button check={'gray'} btnName='Reset' />
              </button>
            </>
          </div>
        </div>
      </Card>
    </>
  );
}
