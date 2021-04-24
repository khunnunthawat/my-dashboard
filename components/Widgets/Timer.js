import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../Layouts/Card';
import Btn from '../Btn';

export default function TimerTest({
  title,
  list,
  setZero,
  zero,
  listAllWidgets,
  setTotaltime,
  totalTime,
  onClickDelete = () => {},
}) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    if (zero === 'Timer') {
      setTimer(0);
      setZero('');
      setIsActive(false);
    }
  }, [zero]);

  useEffect(() => {
    // แล้ว .map() ตำนวน list.value ที่เป็นวินาทีทั้งหมด แล้วเอาค่า มาคำนวน formatTime
    const temp = [...listAllWidgets]
      .map((data) => data.value)
      .reduce((prev, next) => prev + next);
    const totalTime = formatTime(temp);
    console.log(formatTime(temp));
    setTotaltime(totalTime);
  }, [timer]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleClick = function () {
    onClickDelete(list);
  };

  let disabled = true;

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(false);
    console.log(isActive);
  };

  const handleResume = () => {
    setIsPaused(true);
    // countRef.current = setInterval(() => {
    //   setTimer((timer) => timer + 1);
    // }, 1000);
  };

  const handleReset = () => {
    // clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = (sec) => {
    const getSeconds = `0${sec % 60}`.slice(-2);
    const minutes = `${Math.floor(sec / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  list.value = timer;
  // console.log(list.value);

  return (
    <Card title='Timer' onClickDelete={handleClick}>
      <div className='text-center space-x-1'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          <div className='text-6xl mx-7'>{formatTime(timer)}</div>
        </div>
        <>
          {!isActive && !isPaused ? (
            <Btn
              onClick={handleStart}
              disabled={!disabled}
              color='primary'
              btnName='Start'
            />
          ) : isPaused ? (
            <Btn onClick={handlePause} color='primary' btnName='Pause' />
          ) : (
            <Btn onClick={handleResume} color='primary' btnName='Resume' />
          )}
          <Btn onClick={handleReset} color='default' btnName='Reset' />
        </>
      </div>
      <div className='text-xs text-gray-400'>
        <div className='mt-6 -mb-2 text-center'>{list.date}</div>
      </div>
    </Card>
  );
}
