// import Navbar from './Navbar';
// ...
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { menuItems } from '../menuItems';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../Images/logo.jpg"
import { useNavigate } from "react-router-dom"

const Item = ({ item }) => {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  return <div onMouseOver={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
    <div >{item.title}</div>
    <div className="sub-menu"style={{ zIndex: 2, position: 'absolute'}}>
      {isExpanded && item.submenu.map(sub => <div className="sub-title">
        <Link to={`/${sub.url}`}>{sub.title}</Link></div>)}
    </div>

  </div>
}
const Header = () => {


  const { logout } = useContext(AuthContext)

  return (
    <>
      <div className="header">
      <div className="header-container header-top" style={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
      <div style={{ display: 'flex', float: 'left' }}>
          <Link to="/" className="logo">
              <img src={logo}/>
          </Link>
        </div>
        <div className="Logout-btn" onClick={logout} >
          Logout
        </div>
      </div>
      <div className="header-container header-bottom" style={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
        <div className="menu-map"style={{ display: 'flex', width: '100%', justifyContent: 'space-between', margin:'0 30%' }}>
          {menuItems.map(item => {
            return <Item item={item} />
          })}
        </div>
      </div>

    </div>
    </>
  );
};

export default Header;