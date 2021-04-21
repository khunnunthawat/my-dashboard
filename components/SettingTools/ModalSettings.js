import React, { useState } from 'react';
import Btn from '../Btn';
import { RiSettings3Line } from 'react-icons/ri';
import ModalCard from '../Modals/ModalCard';
import { TextHead } from '../Modals/TextHead';

export default function ModalSettings() {

  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const handleCancel = function () {
    setModalActiveSetting(false);
  };

  const handleClickSetting = function () {
    setModalActiveSetting(true);
  };

  let iconTool = 'inline-block text-xl relative -top-0.5';

  return (
    <>
      <Btn onClick={handleClickSetting} color='default'>
        <RiSettings3Line className={`${iconTool}`} /> Settings
      </Btn>
      {modalActiveSetting && (
        <ModalCard onCancel={handleCancel}>
          <TextHead>Settings</TextHead>
        </ModalCard>
      )}
    </>
  );
}
