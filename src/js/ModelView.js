import React, { Component } from "react";
import "../css/modelview.css";
import NavBar from "./NavBar";
import ModelViewContent from "./ModelViewContent";

class ModelView extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-modelview">
            <NavBar />
            <div className="lpa-modelview-content-container">
              <ModelViewContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelView;
