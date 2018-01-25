import React, { Component } from "react";
import "../css/modelimage.css";

class ModelImage extends Component {
  render() {
    return (
      <div className="lpa-modelimage">
        <div className="lpa-modelimage-imgs-container">
          <div className="lpa-modelimage-img-header-container">
            <center>
              <p className="lpa-modelimage-img-header">RENDERED IMAGES</p>
            </center>
          </div>
          <img
            src={require("../images/Image4.jpg")}
            alt="Elephant Image"
            className="pure-img lpa-modelimage-image"
          />
          <img
            src={require("../images/Image1.jpg")}
            alt="Elephant Image"
            className="pure-img lpa-modelimage-image"
          />
          <img
            src={require("../images/Image3.jpg")}
            alt="Elephant Image"
            className="pure-img lpa-modelimage-image"
          />
          <img
            src={require("../images/Image2.jpg")}
            alt="Elephant Image"
            className="pure-img lpa-modelimage-image"
          />
        </div>
      </div>
    );
  }
}

export default ModelImage;
