import React, { useState } from 'react';
import Card from '../Layouts/Card';
import Btn from '../Btn';

export default function Counter({ title, list, onClickDelete = () => {} }) {
  const [count, setCount] = useState(list.value);

  const handleClick = function () {
    onClickDelete(list);
  };

  let clearCount;
  let decrease;
  let disabled = true;

  let countCss = 'text-5xl rounded-full w-10 text-center focus:outline-none';
  let countBlue = 'text-blue-500';
  let countGray = 'text-gray-300';

  const handleClickCount = () => {
    setCount(0);
  };

  if (count == 0) {
    clearCount = (
      <Btn
        onClick={handleClickCount}
        disabled={disabled}
        color='default'
        btnName='Set zero'
      />
    );
    decrease = <button className={`${countCss} + ${countGray}`}>-</button>;
  } else {
    clearCount = (
      <Btn
        onClick={handleClickCount}
        disabled={!disabled}
        color='primary'
        btnName='Set zero'
      />
    );
    decrease = (
      <button
        onClick={() => setCount(list.value - 1)}
        className={`${countCss} + ${countBlue}`}
      >
        -
      </button>
    );
  }

  list.value = count;
  console.log(list.value);

  return (
    <Card title='Counter' key={list.id} onClickDelete={handleClick}>
      <div className='text-center'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          {decrease}
          <div className='text-6xl mx-7'>{count}</div>
          <button
            onClick={() => setCount(list.value + 1)}
            className={`${countCss} + ${countBlue}`}
          >
            +
          </button>
        </div>
        {clearCount}
        <div className='text-xs text-gray-400'>
          <div className='mt-6 -mb-2 text-center'>{list.date}</div>
        </div>
      </div>
    </Card>
  );
}