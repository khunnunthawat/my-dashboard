import React from 'react'
import { TextHead, TextHeadTable } from '../Modals/TextHead';
import SettingCard from './SettingCard';
import Btn from '../Btn';

export default function Settings({ listAllWidgets, children }) {
  
  let totalWidgets = listAllWidgets.length;
  let totalJustSay = 0;
  let totalCounter = 0;

  listAllWidgets.map((list) => {
    if (list.type === 'justSay') {
      totalJustSay = totalJustSay + list.value.length;
    } else if (list.type === 'counter') {
      totalCounter = totalCounter + list.value;
    }
    console.log(list);
  });

  return (
    <>
      <TextHead>Settings</TextHead>
      <SettingCard title='Statistics'>
        <div className='table'>
          <TextHeadTable title='Total widgets: '>{totalWidgets}</TextHeadTable>
          <TextHeadTable title='Total JustSay length: '>{totalJustSay}</TextHeadTable>
          <TextHeadTable title='Total count: '>{totalCounter}</TextHeadTable>
          <TextHeadTable title='Total time: '>00:00</TextHeadTable>
        </div>
      </SettingCard>

      <SettingCard title='Reset Zone'>
        <div className='flex items-center'>
          <select className='flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm'>
            <option value='Counter'>All counters</option>
            <option value='Timer'>All timers</option>
          </select>
          <Btn colorTool='colorTool' btnName='Set zero' />
        </div>
      </SettingCard>
      {children}
    </>
  );
}