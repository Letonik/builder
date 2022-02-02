import React, {useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import Templates from "./Templates";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";
import "./styles/main.scss"
import Countries from "./Countries/Countries";
import Setting from "./Setting/Setting";
import Home from "./Home/Home";
import Sidebar from "./components/MainSideBar/SideBar";
import Test from "./Test";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <div className='app'>
      <Sidebar/>
      <div className='main'>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/setting'} element={<Setting/>}/>
          <Route path={'/editor'} element={<Countries/>}/>
          <Route path={'/editor/:lang'} element={<Templates/>}/>
          <Route path={'/editor/:lang/:pageId'} element={<Editor/>}/>
          <Route path={'/test/:pageId'} element={<Test/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
