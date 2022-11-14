import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="header">
      <div className="sidebarIcon">
        {openSidebar === false ? (
          <FaBars onClick={handleOpenSidebar} />
        ) : (
          <FaTimes onClick={handleOpenSidebar} />
        )}
      </div>
      <div className={`sidebar ${openSidebar === true ? "block" : "hidden"}`}>
        <h2 className="headerLink">
          <NavLink className="firstPage" to="/">
            Food Delivery
          </NavLink>
        </h2>
        <NavLink className="order" to="/auth-page">
          Signup/Login
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
