import React, { useState } from 'react';
import { TextHead, TextHeadTable, TextError } from '../Modals/TextHead';
import SettingCard from './SettingCard';
import Btn from '../Btn';

export default function Settings({
  listAllWidgets,
  children,
  setZero,
  setTotaltime,
  totalTime,
  defaultValueShout,
  onEditJustShout,
  clearWidgets,
}) {
  const [checkError, setCheckError] = useState('');

  let totalWidgets = listAllWidgets.length;
  let totalJustSay = 0;
  let totalCounter = 0;
  let disabled = true;

  // CSS_className
  let inputClass = 'w-full px-2.5 py-1 border focus:outline-none rounded-md';

  let editJustShout = (
    <SettingCard title='JustShout text'>
      <fieldset disabled>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className={`${inputClass}`}
              placeholder='Enter text'
              defaultValue=''
            />
          </div>
          <Btn disabled={disabled} color='primary' btnName='Edit' />
        </form>
      </fieldset>
    </SettingCard>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      onEditJustShout(e.target.title.value.trim()); // เราใช้เพียงคำสั่งนี้ ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };

  listAllWidgets.map((list) => {
    if (list.type === 'justSay' || list.type === 'justShout') {
      if (list.type === 'justShout' && list.value) {
        editJustShout = (
          <SettingCard title='JustShout text'>
            <fieldset>
              <form onSubmit={onSubmit} className='flex'>
                <div className='flex-1 mr-1'>
                  <input
                    name='title'
                    type='text'
                    className={`${inputClass}`}
                    placeholder='Enter text'
                    defaultValue={defaultValueShout}
                  />
                </div>
                <div>
                  <Btn disabled={!disabled} color='primary' btnName='Edit' />
                </div>
              </form>
              <div className='text-red-600 text-xs mt-1'>{checkError}</div>
            </fieldset>
          </SettingCard>
        );
      }
      totalJustSay = totalJustSay + list.value.length;
    } else if (list.type === 'counter') {
      totalCounter = totalCounter + list.value;
    }
  });

  return (
    <>
      <TextHead>Settings</TextHead>
      <SettingCard title='Statistics'>
        <div className='table'>
          <TextHeadTable title='Total widgets: '>{totalWidgets}</TextHeadTable>
          <TextHeadTable title='Total Just length: '>
            {totalJustSay}
          </TextHeadTable>
          <TextHeadTable title='Total count: '>{totalCounter}</TextHeadTable>
          <TextHeadTable title='Total time: '>{totalTime}</TextHeadTable>
          <TextHeadTable title='Coldest cities: '>Weather</TextHeadTable>
        </div>
      </SettingCard>
      {editJustShout}
      {/* <SettingCard title='JustShout text'>
        <fieldset>
          <form onSubmit={onSubmitJustShout} className='flex'>
            <div className='flex-1 mr-1'>
              <input
                name='title'
                type='text'
                className='w-full px-2.5 py-1 border focus:outline-none rounded-md'
                placeholder='Enter text'
                defaultValue={defaultValueShout}
                // value={value}
                // onchange={e => setValue(e.target.value)}
              />
            </div>
            <Btn color='primary' btnName='Edit' />
          </form>
          <TextError>{checkError}</TextError>
        </fieldset>
      </SettingCard> */}

      {/* <SettingCard title='Reset Zone'>
        <form onSubmit={onSubmitZero}>
          <div className='flex items-center'>
            <select name='selector' className={`${selectClass}`}>
              <option value='Counter'>All counters</option>
              <option value='Timer'>All timers</option>
            </select>
            <Btn colorTool='colorTool' btnName='Set zero' />
          </div>
        </form>
      </SettingCard> */}
      {children}
      <SettingCard title='Delete Zone'>
        <Btn
          onClick={clearWidgets}
          color='btn-danger'
          btnName='Delete all widgets'
        />
      </SettingCard>
    </>
  );
}
