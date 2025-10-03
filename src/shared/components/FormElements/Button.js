import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    <a
      href={props.href}
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
    >
      {props.children}
    </a>;
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`button button--${props.size || "default"} 
      ${props.inverse && "button--inverse"}
      ${props.danger && "button--danger"}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
