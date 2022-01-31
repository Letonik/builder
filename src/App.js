import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import Editor from "./Editor";
import Sidebar from "./Components/Sidebar/Sidebar";
import Setting from "./Setting/Setting";
import style from './App.module.scss'
import Countries from "./Countries/Countries";
import Templates from "./Templates/Templates";

function App() {

  return (
    <div className={style.app}>
      <Sidebar/>
      <div className={style.pages}>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/setting'} element={<Setting/>}/>
          <Route path={'/editor'} element={<Countries/>}/>
          <Route path={'/editor/:lang'} element={<Templates/>}/>
          <Route path={'/editor/:lang/:pageId'} element={<Editor/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
