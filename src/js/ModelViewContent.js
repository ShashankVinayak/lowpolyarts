import React, { Component } from "react";
import "../css/modelviewcontent.css";
import ModelViewer from "./ModelViewer";
import ModelFiles from "./ModelFiles";
import ModelImage from "./ModelImage";

class ModelViewContent extends Component {
  render() {
    return (
      <div className="lpa-modelview-content">
        <div className="pure-u-1 pure-u-lg-2-3">
          <ModelViewer />
          <ModelFiles />
        </div>
        <div className="pure-u-1 pure-u-lg-1-3">
          <ModelImage />
        </div>
      </div>
    );
  }
}

export default ModelViewContent;
