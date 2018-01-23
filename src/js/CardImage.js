import React, { Component } from "react";
import "../css/cardimage.css";

class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.imageName = this.props.image.name;
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    let hoverElement = null;
    if (this.state.hover) {
      hoverElement = (
        <div className="lpa-cardview-card-img-hover">
          <center>
            <p className="lpa-cardview-card-img-hover-text">3D PREVIEW</p>
          </center>
        </div>
      );
    }

    return (
      <div
        className="lpa-cardview-card-img-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img
          className="pure-img lpa-cardview-card-img"
          src={require("../images/"+this.imageName+".jpg")}
        />
        {hoverElement}
      </div>
    );
  }
}

export default CardImage;
