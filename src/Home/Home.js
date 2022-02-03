import React from 'react';
import homeIcon from "../assets/homeIcon.png"
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
      <img src={homeIcon} alt="homeIcon"/>
    </div>
  );
};

export default Home;