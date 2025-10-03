import React from "react";

import UsersList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "Medel Domingo",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    placeCount: 1,
  },
  {
    id: "u2",
    name: "Ma. Ilonah Domingo",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    placeCount: 3,
  },
];

const Users = () => {
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
