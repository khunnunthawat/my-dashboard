import React from 'react';

export default function BtnGo({ check, btnName }) {
  function getBtnGo() {

    let BtnGO = 'text-white focus:outline-none px-4 py-1 rounded-md';
    let bgHover = 'hover:text-white hover:bg-gray-900 focus:outline-none';

    let bgBlue = 'bg-blue-500';
    let bgGray = 'bg-gray-300';

    if (check == 'blue') {
      BtnGO = `${BtnGO} + ${bgBlue} + ${bgHover}`;
    } else {
      BtnGO = `${BtnGO} + ${bgGray} + ${bgHover}`;
    }
    return BtnGO;
  }

  return (
    <>
      <button className={getBtnGo()}>
        {btnName}
      </button>
    </>
  );
}