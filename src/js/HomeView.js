import React, { Component } from "react";
import "../css/homeview.css";

/* Displays background image and  author text */
class HomeView extends Component {
  constructor(props){
    super(props);

    this.bkgImagePath = "images/";
    this.bkgImageSRC = "";
    this.bkgImageExtension = "jpg";
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.errorMsg = "";

    this.state = {
      bkgImageSRC: this.bkgImageSRC
    };
  }

  errorHandler(msg) {
    console.log("Something went wrong");
    console.log("Error: " + msg);
  }

  handleImageLoad(){
    this.props.onImageLoadA();
  }

  getBrowserWindowWidth() {
    return Number(window.innerWidth);
  }

  isMobileMode(width){
    let windowWidth = width;
    if (isNaN(windowWidth)) {
      this.errorMsg = "Browser window width is not a number";
      this.errorHandler(this.errorMsg);
      return false;
    }

    if (windowWidth < 600) {
      return true;
    }

    return false;
  }

  getBkgName(){
    return this.isMobileMode(this.getBrowserWindowWidth()) ? "lowpolyarts_small" : "lowpolyarts_large";
  }

  getBkgSRC(){
    let imageName = this.getBkgName();
    let imageSRC = "";
    imageSRC = this.bkgImagePath + "" + imageName + "." + this.bkgImageExtension; 
    return imageSRC;
  }

  renderBkgImage(){
    this.bkgImageSRC = this.getBkgSRC();
    this.setState({
      bkgImageSRC: this.bkgImageSRC
    });
  }

  componentDidMount(){
    this.renderBkgImage();
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-homeview">
            <div className="lpa-homeview-bkg">
              <img className="pure-img lpa-homeview-bkg-image" src={this.state.bkgImageSRC} alt="lowpolyart background" onLoad={this.handleImageLoad}/>
            </div>
            <footer className="lpa-homeview-footer-container">
              <center><p className="lpa-homeview-footer">by Shashank Vinayak</p></center>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
