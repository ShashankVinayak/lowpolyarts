import React, { Component } from "react";
import "../css/modelimage.css";
/* import ModelsJSON from "../jsondata/models.json"; */

class ModelImage extends Component {
  constructor(props) {
    super(props);

    this.imageElementList = [];
    /* this.modelName = "elephant"; */
    this.image = this.props.info.image;
    /* this.image = ModelsJSON.models[this.modelName].image; */

    this.state = {
      imageelementlist: this.imageElementList
    };
  }

  getSRC(filepath, filename, fileextension) {
    return filepath + "" + filename + "." + fileextension;
  }

  getImageElementList(imageObj) {
    let imgSRC,
      imgElement,
      imgElementList,
      img = imageObj,
      imgPath = img.path,
      imageFileList = img.files,
      imgExtension = img.extension;

    imgElementList = imageFileList.map(function(imgName) {
      imgSRC = this.getSRC(imgPath, imgName, imgExtension);
      imgElement = (
        <img
          src={imgSRC}
          alt={imgName}
          className="pure-img lpa-modelimage-image"
          key={imgName}
        />
      );
      return imgElement;
    },this);

    return imgElementList;
  }

  renderImages(){
    this.imageElementList = this.getImageElementList(this.image);
    this.setState({
      imageelementlist: this.imageElementList
    });
  }

  componentDidMount(){
    this.renderImages();
  }

  render() {
    return (
      <div className="lpa-modelimage">
        <div className="lpa-modelimage-imgs-container">
          <div className="lpa-modelimage-img-header-container">
            <center>
              <p className="lpa-modelimage-img-header">RENDERED IMAGES</p>
            </center>
          </div>
          {this.state.imageelementlist}
        </div>
      </div>
    );
  }
}

export default ModelImage;
