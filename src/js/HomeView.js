import React, { Component } from "react";
import "../css/homeview.css";

/* Displays background image and  author text */
class HomeView extends Component {
  constructor(props){
    super(props);

    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad(){
    this.props.onImageLoadA();
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-homeview">
            <div className="lpa-homeview-bkg">
              <img className="pure-img lpa-homeview-bkg-image" src={require("../images/lowpolyarts.jpg")} alt="lowpolyart background" onLoad={this.handleImageLoad}/>
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
