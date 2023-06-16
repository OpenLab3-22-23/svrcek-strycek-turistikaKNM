import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import { SidebarData } from "./SidebarData";
import { useAuth } from "../auth/Auth";
import "./Navbar.css";
import { IconContext } from "react-icons";
import supabase from "../supabase/supabaseClient";

function Navbar() {
  const { signOut } = useAuth();
  const { session } = useAuth();

  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("nieo");

  useEffect(() => {
    const fetchGPS = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", session.user.id);

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        console.log(data[0].username);
        setCurrentUser(data[0].username);
      }
    };
    fetchGPS();
  }, [navigate]);

  function handleLogOut(e): void {
    e.preventDefault();
    signOut();
  }

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-bars-container">
            <FaIcons.FaBars className="menu-bars" onClick={toggleSidebar} />
          </div>
          <div>
            <h1 className="nav-headher">Turistika KNM</h1>
          </div>
          <div className="profile-container">
            <h2 className="userName">{currentUser}</h2>
            <div className="icon-container">
              <CgIcons.CgProfile className="profile-icon" />
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu" : "nav-menu-closed"}>
          <ul className="nav-menu-items" onClick={toggleSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose className="menu-bars" />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-bar-span">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <a onClick={handleLogOut}>
                <MdIcons.MdLogout />
                <span className="nav-bar-span">Odhlásiť Sa</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
