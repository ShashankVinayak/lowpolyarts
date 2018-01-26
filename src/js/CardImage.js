import React, { Component } from "react";
import "../css/cardimage.css";

class CardImage extends Component {
  constructor(props) {
    super(props);

    this.image = "";

    this.imagePath = this.props.image.path;
    this.imageName = this.props.image.name;
    this.imageExtension = this.props.image.extension;

    this.state = {
      hover: false,
      imgsrc : this.image
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleCardClickCI = this.handleCardClickCI.bind(this);
  }

  getImageSRC(){
    return this.imagePath + "" + this.imageName + "." + this.imageExtension;
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

  handleCardClickCI(){
    this.props.onCardClickC();
  }

  renderImage(){
    this.image = this.getImageSRC();
    this.setState({
      imgsrc: this.image
    });
  }

  componentDidMount(){
    this.renderImage();
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
        onClick={this.handleCardClickCI}
      >
        <img
          className="pure-img lpa-cardview-card-img"
          src={this.state.imgsrc}
          alt={this.imageName} 
        />
        {hoverElement}
      </div>
    );
  }
}

export default CardImage;
