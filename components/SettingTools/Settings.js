import React from 'react';
import { TextHead, TextHeadTable } from '../Modals/TextHead';
import SettingCard from './SettingCard';
import Btn from '../Btn';

export default function Settings({ listAllWidgets, children, setZero }) {
  let totalWidgets = listAllWidgets.length;
  let totalJustSay = 0;
  let totalCounter = 0;
  let totalTimer = 0;

  listAllWidgets.map((list) => {
    if (list.type === 'justSay') {
      totalJustSay = totalJustSay + list.value.length;
    } else if (list.type === 'counter') {
      totalCounter = totalCounter + list.value;
    } else {
      totalTimer = totalTimer + list.value;
    }
    console.log(list);
  });

  const onSubmit = function (e) {
    e.preventDefault(e);
    setZero(e.target.selector.value)
  };

  const totalTimerFormat = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <>
      <TextHead>Settings</TextHead>
      <SettingCard title='Statistics'>
        <div className='table'>
          <TextHeadTable title='Total widgets: '>{totalWidgets}</TextHeadTable>
          <TextHeadTable title='Total JustSay length: '>
            {totalJustSay}
          </TextHeadTable>
          <TextHeadTable title='Total count: '>{totalCounter}</TextHeadTable>
          <TextHeadTable title='Total time: '>
            <span>{totalTimerFormat}</span>
          </TextHeadTable>
        </div>
      </SettingCard>

      <SettingCard title='Reset Zone'>
        <form onSubmit={onSubmit}>
          <div className='flex items-center'>
            <select
              name='selector'
              className='flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm'
            >
              <option value='Counter'>All counters</option>
              <option value='Timer'>All timers</option>
            </select>
            <Btn colorTool='colorTool' btnName='Set zero' />
          </div>
        </form>
      </SettingCard>
      {children}
    </>
  );
}
