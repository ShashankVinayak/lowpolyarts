import React, { Component } from "react";
import "../css/card.css";
import CardImage from "./CardImage";
import CardName from "./CardName";

class Card extends Component {
  render() {
    return (
      <div className="lpa-cardview-card-container">
        <div className="lpa-cardview-card">
          <CardImage image={this.props.cards.image} />
          <CardName model={this.props.cards.model}/>
        </div>
      </div>
    );
  }
}

export default Card;