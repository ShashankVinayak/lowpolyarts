import React, { Component } from "react";
import "../css/modelviewcontent.css";
import ModelsJSON from "../jsondata/models.json";
import ModelViewer from "./ModelViewer";
import ModelFiles from "./ModelFiles";
import ModelImage from "./ModelImage";

class ModelViewContent extends Component {
  constructor(props){
    super(props);

    this.id = this.props.id;
    this.models = ModelsJSON.models;

    this.modelviewer = {
      load : this.models[this.id].viewerload,
      modelname : this.models[this.id].modelname
    };

    this.modelfiles = {
      modelfile: this.models[this.id].modelfile
    };

    this.modelimage = {
      image: this.models[this.id].image
    };
  }

  render() {
    return (
      <div className="lpa-modelview-content">
        <div className="pure-u-1 pure-u-lg-2-3">
          <ModelViewer info={this.modelviewer} />
          <ModelFiles info={this.modelfiles} />
        </div>
        <div className="pure-u-1 pure-u-lg-1-3">
          <ModelImage info={this.modelimage} />
        </div>
      </div>
    );
  }
}

export default ModelViewContent;
