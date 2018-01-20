import React, { Component } from "react";
import "../css/cardviewcontent.css";
import Card from "./Card";

class CardViewContent extends Component {
  render() {
    return (
      <div className="lpa-cardview-content">
        <div className="lpa-cardview-cardlist">
          <div className="pure-u-1-3">
            <Card />
          </div>
          <div className="pure-u-1-3" />
          <div className="pure-u-1-3" />
        </div>
      </div>
    );
  }
}

export default CardViewContent;
