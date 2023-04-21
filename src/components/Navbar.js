import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData"
import "../App.css";
import { IconContext } from "react-icons";
import { useLoginDet, useUpdateLoginDet } from "../UserContext";
import { userObjTemplate } from "./../constants.js";
import "./navbar.css";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const userDetails = useLoginDet();
  const updateUserDetails = useUpdateLoginDet();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <Link to="/about-us" className="menu-bar-link company-title">
              Data Quest
            </Link>
          </div>
          <div className="menu-bar-right">
            <Link to="/home" className="menu-bar-link">
              Home
            </Link>
            <Link to="/about-us" className="menu-bar-link">
              About Us
            </Link>
            <Link to="/contact-us" className="menu-bar-link">
              Contact Us
            </Link>

            {userDetails.user_id !== "" ? (
              <Link
                to="/home"
                className="menu-bar-link"
                onClick={() => {
                  updateUserDetails(userObjTemplate);
                }}
              >
                Log Out
              </Link>
            ) : (
              <Link to="/login" className="menu-bar-link">
                Login
              </Link>
            )}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (
                !(
                  userDetails.user_id === "" &&
                  (item.title === "Profile" || item.title === "Logout"|| item.title === "Settings")
                )
              )
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
