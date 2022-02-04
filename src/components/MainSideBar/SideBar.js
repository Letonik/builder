import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNav.css";


const SideNav = () => {
  const location = useLocation()
  console.log(location)

  const [collaps, setCollaps] = useState(true)
  const setCollapsed = () => {
    collaps ? setCollaps(false) : setCollaps(true)
  }

  return (
    <>
      <div id="sb">
        <ProSidebar
          collapsed={collaps}
          onBlur={() => setCollaps(true)}
        >
          <SidebarHeader>
            <div onClick={setCollapsed} className='closemenu'>
              <i className="fa fa-bars"></i>
            {/*  <div>

              </div>*/}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                icon={<i className="fa fa-home"></i>}
                active={location.pathname === '/'}
              >
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem
                icon={<i className="fa fa-cog"></i>}
                active={location.pathname === '/setting'}
              >
                <Link to="/setting">Setting</Link>
              </MenuItem>
               <MenuItem
                 icon={<i className="fa fa-edit"></i>}
                 active={location.pathname.slice(0, 7) === '/editor'}
               >
                 <Link to="/editor">Editor</Link>
               </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
