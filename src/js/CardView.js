import React, { Component } from "react";
import "../css/cardview.css";
import NavBar from "./NavBar";
import CardViewContent from "./CardViewContent";

class CardView extends Component {
  constructor(props){
    super(props);

    this.handleCardClickCV = this.handleCardClickCV.bind(this);
    this.handleBrandNameClickCV = this.handleBrandNameClickCV.bind(this);
  }

  handleCardClickCV(modelName){
    this.props.onCardClickVC(modelName);
  }

  handleBrandNameClickCV(){
    this.props.onBrandNameClickVC();
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-cardview">
            <NavBar onBrandNameClickCV={this.handleBrandNameClickCV} />
            <div className="lpa-cardview-content-container">
              <CardViewContent onCardClickCV={this.handleCardClickCV}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;
