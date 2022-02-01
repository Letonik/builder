import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import sidebarBg from '../../assets/bg-sl.jpg';

const Sidebar = props => {
  const [collaps, setCollaps] = useState(true)
  const setCollapsed = () => {
    collaps ? setCollaps(false) : setCollaps(true)
  }

  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collaps}
      style={{height: '100vh'}}
      onBlur={() => setCollaps(true)}
    >
      <SidebarHeader>
        <div onClick={setCollapsed} className='sb_header_i'>
          <i className="fa fa-bars"></i>
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={'H'}> <Link to="/">Home</Link></MenuItem>
        <MenuItem icon={'S'}> <Link to="/setting">Setting</Link></MenuItem>
        <SubMenu title="Page creation" icon={'P'}>
          <MenuItem><Link to="/editor">Main</Link></MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>

  );
};
export default Sidebar
