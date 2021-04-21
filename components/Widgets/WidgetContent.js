import React, { useState } from 'react';
import Btn from '../Btn';
import ModalCard from '../Modals/ModalCard';
import WidgetMenuCard from './WidgetMenuCard';
// icon
import { RiAddCircleLine, RiIncreaseDecreaseLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { TextHead } from '../Modals/TextHead';

// Form_Input
import FormCounter from '../AddWidgets/FormCounter';
import FormJustSay from '../AddWidgets/FormJustSay';

// Layout
import JustSay from './JustSay';
import Counter from './Counter';
import Timer from './Timer';
import ModalSettings from '../SettingTools/ModalSettings';

export default function WidgetContent() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const [titleJustsay, setTitleJustsay] = useState('');
  const [counter, setCouter] = useState('');
  const [timer, setTimer] = useState('');

  const [listAllWidgets, setListAllWidgets] = useState([]);

  const handleClickMenu = function () {
    setModalActiveMenu(true);
  };

  const handleClickJustsay = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(true);
    setTitleJustsay();
  };

  const handleClickCounter = function () {
    setModalActiveMenu(false);
    setModalActiveCounter(true);
    setCouter();
  };

  const handleClickTimer = function () {
    setModalActiveMenu(false);
    setTimer();
    handleCancel();

    let id;

    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop();
      id = lastArray.id + 1;
    }

    const data = {
      value: '',
      id: id,
      date: DateTime,
      type: 'timer',
    };

    setListAllWidgets([...listAllWidgets, data]);
  };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(false);
    setModalActiveCounter(false);
    setModalActiveSetting(false);
  };

  // const handleClickSetting = function () {
  //   setModalActiveSetting(true);
  // };

  const handleClickDelete = function (list) {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
  };

  // DateTimeNow
  let d = new Date();
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  var n = d.toLocaleString([], { hour12: true });

  let DateTime = `Added on ${n}`;

  // handleAddWidgets
  const handleAddWidgets = function () {
    if (listAllWidgets.length > 0) {
      // console.log(listAllWidgets);
      return listAllWidgets.map((list) => {
        if (list.type === 'justSay') {
          return (
            <JustSay
              onClickDelete={handleClickDelete}
              key={list.id}
              title={titleJustsay}
              list={list}
            />
          );
        } else if (list.type === 'counter') {
          return (
            <Counter
              onClickDelete={handleClickDelete}
              key={list.id}
              title={counter}
              list={list}
            />
          );
        } else if (list.type === 'timer') {
          return (
            <Timer
              onClickDelete={handleClickDelete}
              key={list.id}
              title={timer}
              list={list}
            />
          );
        }
      });
    } else {
      return (
        <div className='md:inner md:w-1/2 pb-4 md:pr-4'>
          <div className='p-5 border-1 bg-white rounded-2xl'>
            <div className='text-center text-gray-400 my-8 font-light'>
              <p className='text-4xl mb-2'>No widgets at all</p>
              <p>
                Click{' '}
                <Btn color='none' onClick={handleClickMenu}>
                  HERE
                </Btn>{' '}
                to add a new one
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  // CSS icon
  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';
  let flexClass = 'md:flex md:flex-wrap md:-mr-4';

  // Clear widget
  // const clearWidgets = () => {
  //   // clear all history
  //   setListAllWidgets([]);
  // };

  // let colorTool = false;

  // let clearBtn = (
  //   <Btn onClick={clearWidgets} colorTool={colorTool}>
  //     <RiSettings3Line className={`${iconTool}`} /> Settings
  //   </Btn>
  // );
  // if (listAllWidgets.length > 0) {
  //   clearBtn = (
  //     <Btn onClick={clearWidgets} colorTool={!colorTool}>
  //       <RiSettings3Line className={`${iconTool}`} /> Settings
  //     </Btn>
  //   );
  // }

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <Btn color='primary' onClick={handleClickMenu}>
            <RiAddCircleLine className={`${iconTool}`} /> Add Widget
          </Btn>{' '}
          {/* {clearBtn} */}
          {/* <Btn onClick={handleClickSetting} color='default'>
            <RiSettings3Line className={`${iconTool}`} /> Settings หน้า
            WidgetContent.js
          </Btn> */}
          <ModalSettings />
        </div>
        <div className={`${flexClass}`}>{handleAddWidgets()}</div>
        {modalActiveMenu && (
          <ModalCard onCancel={handleCancel}>
            <TextHead>Add widget</TextHead>
            <div className='flex flex-wrap text-center mt-1.5 -ml-1.5'>
              <WidgetMenuCard title='JustSay' onClick={handleClickJustsay}>
                <AiOutlineMessage className={`${iconClass}`} />
              </WidgetMenuCard>
              <WidgetMenuCard title='Counter' onClick={handleClickCounter}>
                <RiIncreaseDecreaseLine className={`${iconClass}`} />
              </WidgetMenuCard>
              <WidgetMenuCard title='Timer' onClick={handleClickTimer}>
                <IoTimerOutline className={`${iconClass}`} />
              </WidgetMenuCard>
            </div>
          </ModalCard>
        )}
        {/* Modal_Justsay */}
        {modalActiveJustsay && (
          <ModalCard onCancel={handleCancel}>
            <FormJustSay
              handleAddWidgets={handleAddWidgets}
              setTitleJustsay={setTitleJustsay}
              handleCancel={handleCancel}
              listAllWidgets={listAllWidgets}
              setListAllWidgets={setListAllWidgets}
              DateTime={DateTime}
            />
          </ModalCard>
        )}
        {/* Modal_Counter */}
        {modalActiveCounter && (
          <ModalCard onCancel={handleCancel}>
            <FormCounter
              handleAddWidgets={handleAddWidgets}
              setCouter={setCouter}
              handleCancel={handleCancel}
              listAllWidgets={listAllWidgets}
              setListAllWidgets={setListAllWidgets}
              DateTime={DateTime}
            />
          </ModalCard>
        )}
        {/* Modal_Setting */}
        {modalActiveSetting && (
          <ModalCard onCancel={handleCancel}>
            <TextHead>Settings</TextHead>
          </ModalCard>
        )}
      </div>
    </>
  );
}
