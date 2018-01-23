import React, { Component } from "react";
import "../css/cardname.css";

class CardName extends Component {
  constructor(props){
    super(props);

    this.modelName = this.props.model.name;
  }

  render() {
    return (
      <div className="lpa-cardview-card-name-container">
        <center>
          <p className="lpa-cardview-card-name">{this.modelName.toUpperCase()}</p>
        </center>
      </div>
    );
  }
}

export default CardName;
