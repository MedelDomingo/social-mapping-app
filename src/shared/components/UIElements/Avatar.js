import React from "react";

import "../UIElements/Avatar.css";

const Avatar = (props) => {
  return (
    <div className="img__wrapper">
      <img
        src={props.image}
        alt={props.name}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
};

export default Avatar;
