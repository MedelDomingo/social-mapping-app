import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "../components/Userslist.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    <Card>
      return <h2>No Users Found.</h2>;
    </Card>;
  }

  return (
    <ul className="user__list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.placeCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
