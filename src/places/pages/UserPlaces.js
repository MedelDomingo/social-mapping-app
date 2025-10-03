import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
