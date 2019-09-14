import React, { Component } from "react";
import "./card.styles.css";

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.name}?set=set2&size=180x180`}
      ></img>
      <h1>{props.monster.name}</h1>
      {props.monster.email}
    </div>
  );
};

export default Card;
