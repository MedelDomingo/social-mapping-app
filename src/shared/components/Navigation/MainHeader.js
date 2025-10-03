import React from "react";

import "../Navigation/MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header__wrapper">{props.children}</header>;
};

export default MainHeader;
