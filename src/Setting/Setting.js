import React from 'react';
import style from './Setting.module.scss'
import settingIcon from "../assets/settingIcon1.png";

const Setting = () => {
  return (
    <div className={style.setting}>
      <img src={settingIcon} alt="settingIcon"/>
    </div>
  );
};

export default Setting;