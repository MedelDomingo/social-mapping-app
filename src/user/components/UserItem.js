import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

import "../components/UserItem.css";

const UserItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}/places`}>
        <Card>
          <div className="user_item__image">
            <Avatar
              image={props.image}
              alt={props.name}
              width={80}
              height={80}
            />
          </div>
          <div className="user_item__name">
            <h2>{props.name}</h2>
            <p>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
