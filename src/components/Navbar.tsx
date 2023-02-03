import React, {useState} from 'react'
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { SidebarData } from './SidebarData';
import { useAuth } from '../auth/Auth';
import "./Navbar.css"
import { IconContext } from 'react-icons';

function Navbar() {
    
    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu-closed'}> 
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className='nav-bar-span'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                <li>
                    <button onClick={handleLogOut}>Log Out</button>
                </li>
            </ul>
        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar