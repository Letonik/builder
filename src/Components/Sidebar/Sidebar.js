import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from "react-router-dom";
import {useState} from "react";
const Sidebar = props => {
const [collaps, setCollaps] = useState(true)
  const setCollapsed = () => {
    collaps ? setCollaps(false) : setCollaps(true)
  }

  return (
    <ProSidebar
      collapsed={collaps}
      style={{height: '100vh'}}
    >
      <SidebarHeader>
        <div onClick={setCollapsed}>
          >
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


