import React from "react";

import "./NewPlace.css";

import { VALIDATOR_REQUIRE } from "../../util/validators";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = (props) => {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="Add New Place"
        placeholder="Place title"
        errorText="Please Enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};

export default NewPlace;
