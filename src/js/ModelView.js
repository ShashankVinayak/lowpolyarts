import React, { Component } from "react";
import "../css/modelview.css";
import NavBar from "./NavBar";
import ModelViewContent from "./ModelViewContent";

class ModelView extends Component {
  constructor(props){
    super(props);

    this.handleBrandNameCLickMV = this.handleBrandNameCLickMV.bind(this);
  }

  handleBrandNameCLickMV(){
    this.props.onBrandNameClickVC();
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-modelview">
            <NavBar onBrandNameClickMV={this.handleBrandNameCLickMV} />
            <div className="lpa-modelview-content-container">
              <ModelViewContent id={this.props.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelView;
