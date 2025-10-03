import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";

import "../Navigation/MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <div className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </div>
        <button onClick={openDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="main-navigations__links">
          <NavLinks />
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
