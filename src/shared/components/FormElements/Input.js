import React, { useReducer, useEffect } from "react";

import { validate } from "../../../util/validators";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inititialInputVal, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inititialInputVal;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        onChange={changeHandler}
        value={inititialInputVal.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inititialInputVal.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        !inititialInputVal.value &&
        inititialInputVal.isTouched &&
        "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inititialInputVal.value && inititialInputVal.isTouched && (
        <p>{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
