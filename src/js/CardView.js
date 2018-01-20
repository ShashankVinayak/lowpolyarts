import React, { Component } from "react";
import "../css/cardview.css";
import NavBar from "./NavBar";
import CardViewContent from "./CardViewContent";

class CardView extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-cardview">
            <NavBar />
            <div className="lpa-cardview-content-container">
              <CardViewContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;
