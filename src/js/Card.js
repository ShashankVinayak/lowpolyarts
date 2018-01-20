import React, { Component } from "react";
import "../css/card.css";
import CardImage from "./CardImage";
import CardName from "./CardName";

class Card extends Component {
  render() {
    return (
      <div className="lpa-cardview-card-container">
        <div className="lpa-cardview-card">
          <CardImage />
          <CardName />
        </div>
      </div>
    );
  }
}

export default Card;