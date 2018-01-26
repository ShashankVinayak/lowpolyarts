import React, { Component } from "react";
import "../css/modelfiles.css";
/* import ModelsJSON from "../jsondata/models.json"; */

class ModelFiles extends Component {
  constructor(props) {
    super(props);

    this.modelFile = this.props.info.modelfile;
    /* this.modelFile = ModelsJSON.models.elephant.modelfile; */
    this.modelFileContentList = [];
    this.errorMsg = "";

    this.state = {
      modelfiles: this.modelFileContentList
    };
  }

  errorHandler(msg) {
    console.log("Something went wrong");
    console.log("Error: " + msg);
  }

  getModelFileData() {
    return this.modelFile;
  }

  getBrowserWindowWidth() {
    return Number(window.innerWidth);
  }

  /* Conditional rendering when screen width is less than 768px */
  isMobileMode(width) {
    let windowWidth = width;
    if (isNaN(windowWidth)) {
      this.errorMsg = "Browser window width is not a number";
      this.errorHandler(this.errorMsg);
      /* As window width is not available, length 2 is set as default */
      return false;
    }

    if (windowWidth < 768) {
      return true;
    }

    return false;
  }

  getListLength() {
    return this.isMobileMode(this.getBrowserWindowWidth()) ? 1 : 2;
  }

  getHREF(filepath, filename, fileextension) {
    return filepath + "" + filename + "." + fileextension;
  }

  getModelFileExtension(modelFile) {
    return this.getHREF("", "", modelFile.extension);
  }

  getEmptyModelFileList(listLength) {
    let modelFileListLength = listLength;
    let modelFileList = [];
    for (let i = 0; i < modelFileListLength; i++) {
      modelFileList[i] = [];
    }
    return modelFileList;
  }

  getModelFileBtnList(jsonModelFile) {
    let i = 0,
      j = 0,
      modelFileBtnLength = 0,
      modelFileBtn,
      modelFileBtnList = [],
      jsonModelFileCommonPath = jsonModelFile.path,
      jsonModelFilesList = jsonModelFile.files,
      jsonModelFileCommonExt = jsonModelFile.extension,
      modelFileHREF = "",
      modelFileExtension = "";
    let jsonModelFileListLength = jsonModelFilesList.length;
    modelFileBtnList = this.getEmptyModelFileList(this.getListLength());
    modelFileBtnLength = modelFileBtnList.length;

    while (j < jsonModelFileListLength) {
      modelFileHREF = this.getHREF(
        jsonModelFileCommonPath,
        jsonModelFilesList[j].name,
        jsonModelFileCommonExt
      );
      modelFileExtension = this.getModelFileExtension(jsonModelFilesList[j]);
      i = i % modelFileBtnLength;
      modelFileBtn = (
        <center key={jsonModelFilesList[j].extension}>
          <a
            href={modelFileHREF}
            className="pure-button lpa-modelfiles-files-btn"
          >
            {modelFileExtension}
          </a>
        </center>
      );
      modelFileBtnList[i].push(modelFileBtn);
      i = i + 1;
      j = j + 1;
    }

    return modelFileBtnList;
  }

  getModelFileContentList() {
    let i = 0,
      modelFile;
    let jsonModelFile = this.getModelFileData();
    let modelFileBtnList = this.getModelFileBtnList(jsonModelFile);
    let modelFileBtnListLength = modelFileBtnList.length;
    let modelFileContentList = [];
    while (i < modelFileBtnListLength) {
      modelFile = (
        <div className="pure-u-1 pure-u-md-1-2" key={i.toString()}>
          {" "}
          {modelFileBtnList[i]}{" "}
        </div>
      );
      modelFileContentList.push(modelFile);
      i = i + 1;
    }
    return modelFileContentList;
  }

  renderModelFileContent(){
    this.modelFileContentList = this.getModelFileContentList();
    this.setState({
      modelfiles: this.modelFileContentList
    });
  }

  componentDidMount() {
    this.renderModelFileContent();
  }

  render() {
    return (
      <div className="lpa-modelfiles">
        <div className="lpa-modelfiles-files-container">
          <div className="lpa-modelfiles-files-header-container">
            <center>
              <p className="lpa-modelfiles-files-header">DOWNLOAD</p>
            </center>
          </div>
          <div className="lpa-modelfiles-files-btn-container">
            <div className="pure-g">
              {this.state.modelfiles}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelFiles;
