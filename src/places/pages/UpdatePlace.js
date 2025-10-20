import React from "react";

import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Shangri-La Boracay",
    description:
      "a 5-star luxury resort on Boracay Island's northern coast, offering a secluded and tropical escape with private beachfronts, stunning pools, and spacious rooms and villas featuring impressive views and contemporary Filipino design",
    imageUrl:
      "https://images.trvl-media.com/lodging/3000000/2480000/2479600/2479541/539092a1.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    address: "Barangay Yapak, Boracay Island, Malay, Aklan 5608, Philippines",
    location: {
      lat: 11.9874249,
      loc: 121.9036539,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Amanpulo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipN76im0UYTNgoLCuiA4XLKPNDtMiqvfunXTomoO=w408-h272-k-no",
    address: "Cuyo Archipelago of northern Palawan, Philippines",
    location: {
      lat: 12.935134,
      loc: 119.5467236,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlaceid = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, InputHandler] = useForm(
    {
      title: {
        value: identifiedPlaceid.title,
        isValid: true,
      },
      description: {
        value: identifiedPlaceid.description,
        isValid: true,
      },
    },
    true
  );

  if (!identifiedPlaceid) {
    return (
      <div className="center">
        <h2>Could not find place.</h2>
      </div>
    );
  }

  const placeUpdateHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={placeUpdateHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Descriptiom"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" isDisabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
