import React, { Component } from "react";

import Card from "../cards/card-component";
import "./card-list.css";
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
