import React, { useState } from 'react';
import Btn from '../Btn';
import ModalCard from '../Modals/ModalCard';
import WidgetMenuCard from './WidgetMenuCard';
// icon
import { RiAddCircleLine, RiIncreaseDecreaseLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { TextHead } from '../Modals/TextHead';

// Form_Input
import FormCounter from '../AddWidgets/FormCounter';
import FormJustSay from '../AddWidgets/FormJustSay';

// Layout
import Card from '../Layouts/Card';
import JustSay from './JustSay';
import Counter from './Counter';
import Timer from './Timer';

export default function WidgetContent() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);

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

  /**
   * ฟังก์ชัน handleClickAdd เราสามารถ Reuse ให้ Add widget อะไรก็ได้
   * เพียงแค่ส่ง type กับ value เข้ามาจาก Add Widget แบบต่างๆ
   * */
  const handleClickAdd = function (type, value) {
    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
      id = lastArray.id + 1;
    }
    const data = {
      value,
      id: id,
      date: DateTime,
      type,
    };
    setListAllWidgets([...listAllWidgets, data]);
    handleCancel();
  };

  // const handleClickTimer = function () {
  //   setModalActiveMenu(false);
  //   setTimer();
  //   handleCancel();

  //   let id;

  //   if (listAllWidgets.length == 0) {
  //     id = 1;
  //   } else {
  //     const lastArray = listAllWidgets.slice(-1).pop();
  //     id = lastArray.id + 1;
  //   }

  //   const data = {
  //     value: '',
  //     id: id,
  //     date: DateTime,
  //     type: 'timer',
  //   };

  //   setListAllWidgets([...listAllWidgets, data]);
  // };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(false);
    setModalActiveCounter(false);
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
      return listAllWidgets.map((list, index) => {
        if (list.type === 'justSay') {
          return <JustSay key={index} title={titleJustsay} list={list} />;
        } else if (list.type === 'counter') {
          return <Counter key={index} title={counter} list={list} />;
        } else if (list.type === 'timer') {
          return <Timer key={index} title={timer} list={list} />;
        }
      });
    } else {
      return (
        <Card>
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
        </Card>
      );
    }
  };

  // CSS icon
  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';
  let flexClass = 'md:flex md:flex-wrap md:-mr-4';

  // Clear widget
  const clearWidgets = () => {
    // clear all history
    setListAllWidgets([]);
  };

  let colorTool = false;

  let clearBtn = (
    <Btn onClick={clearWidgets} colorTool={colorTool}>
      <BiBomb className={`${iconTool}`} /> Clear all
    </Btn>
  );
  if (listAllWidgets.length > 0) {
    clearBtn = (
      <Btn onClick={clearWidgets} colorTool={!colorTool}>
        <BiBomb className={`${iconTool}`} /> Clear all
      </Btn>
    );
  }

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <Btn color='primary' onClick={handleClickMenu}>
            <RiAddCircleLine className={`${iconTool}`} /> Add Widget
          </Btn>{' '}
          {clearBtn}
          {/* <Btn onClick={clearWidgets} color='danger'>
            <BiBomb className={`${iconTool}`} /> Clear all
          </Btn> */}
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
              <WidgetMenuCard
                title='Timer'
                onClick={() => {
                  handleClickAdd('timer', '');
                }}
              >
                <IoTimerOutline className={`${iconClass}`} />
              </WidgetMenuCard>
            </div>
          </ModalCard>
        )}
        {/* Modal_Justsay */}
        {modalActiveJustsay && (
          <ModalCard onCancel={handleCancel}>
            <FormJustSay
              onAdd={handleClickAdd}
              // handleAddWidgets={handleAddWidgets}
              // setTitleJustsay={setTitleJustsay}
              // handleCancel={handleCancel}
              // listAllWidgets={listAllWidgets}
              // setListAllWidgets={setListAllWidgets}
              // DateTime={DateTime}
            />
          </ModalCard>
        )}
        {/* Modal_Counter */}
        {modalActiveCounter && (
          <ModalCard onCancel={handleCancel}>
            <FormCounter
              onAdd={handleClickAdd}
              // handleAddWidgets={handleAddWidgets}
              // setCouter={setCouter}
              // handleCancel={handleCancel}
              // listAllWidgets={listAllWidgets}
              // setListAllWidgets={setListAllWidgets}
              // DateTime={DateTime}
            />
          </ModalCard>
        )}
      </div>
    </>
  );
}
