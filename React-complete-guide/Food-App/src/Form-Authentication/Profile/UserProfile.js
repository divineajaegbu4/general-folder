import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className={classes.containerForm}>
      <header className={classes.formProfile}>
        <div className={classes.sidebarIconProfile}>
          {openSidebar === false ? (
            <FaBars onClick={handleOpenSidebar} />
          ) : (
            <FaTimes onClick={handleOpenSidebar} />
          )}
        </div>
        <div
          className={`${classes.sidebarProfile} ${
            openSidebar === true ? classes.block : classes.hidden
          }`}
        >
          <h3>Food delivery</h3>
          <NavLink className={classes.formProfileLink} to="/auth-page">
            Logout
          </NavLink>
        </div>
      </header>
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    </div>
  );
};

export default UserProfile;
