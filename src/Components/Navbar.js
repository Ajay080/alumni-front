import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import './Navbar.css'
const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'green' , }}>

      <div className="menus container" style={{ backgroundColor: 'red', }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flex: 1 }}>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
        </div>
        {/* {menuItems.map(item =>{

        })} */}
        {/* {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })} */}
      </div>
    </div>

  );
};

export default Navbar;