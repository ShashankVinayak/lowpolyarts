import React, { Component } from "react";
import "../css/cardviewcontent.css";
import Card from "./Card";

/* Conditional rendering when screen width is between 768px to 1024px */
class CardViewContent extends Component {
  render() {
    return (
      <div className="lpa-cardview-content">
        <div className="lpa-cardview-cardlist">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
            <Card />
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3" />
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3" />
        </div>
      </div>
    );
  }
}

export default CardViewContent;
