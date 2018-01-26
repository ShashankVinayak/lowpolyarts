import React, { Component } from "react";
import "../css/modelviewer.css";
/* import ModelsJSON from "../jsondata/models.json"; */

class ModelViewer extends Component {
  constructor(props) {
    super(props);

    this.load = this.props.info.load;
    this.modelName = this.props.info.modelname;
/*     this.modelName = "elephant";
    this.load = ModelsJSON.models[this.modelName].viewerload; */
    this.webplayer = "webplayer/webplayer.html";
    this.srcObj = {
      load: this.load,
      webplayer: this.webplayer
    };
    this.src = "";

    this.state = {
      sourcePath: this.src,
      modelName: this.modelName
    };
  }

  getLoadOptions(loadOptionList) {
    let i,
      list = loadOptionList,
      listLength = list.length,
      loadOptions = "",
      optionsConnector = "&",
      loadOption = "";

    for (i = 0; i < listLength; i++) {
      loadOption = optionsConnector + list[i];
      loadOptions = loadOptions + loadOption;
    }
    loadOptions = loadOptions + "&";

    return loadOptions;
  }

  getIframeLoad(loadObject) {
    let loadPath = loadObject.path,
      loadFilename = loadObject.filename,
      loadFileExt = loadObject.extension,
      loadOptionList = loadObject.options,
      loadOptions = this.getLoadOptions(loadOptionList),
      load;

    load = loadPath + "" + loadFilename + "." + loadFileExt + "" + loadOptions;

    return load;
  }

  getIframeSRC(sourceObject) {
    let loadObj = sourceObject.load;
    let webplayer = sourceObject.webplayer;
    let load = this.getIframeLoad(loadObj);

    let iframeSRC = webplayer + "?load=" + load;

    return iframeSRC;
  }

  render3DViewer() {
    this.src = this.getIframeSRC(this.srcObj);
    this.setState({
      sourcePath: this.src
    });
  }

  componentDidMount() {
    this.render3DViewer();
  }

  render() {
    return (
      <div className="lpa-modelviewer">
        <div className="lpa-modelviewer-3dview-container">
          <div className="lpa-modelviewer-header-container">
            <center>
              <p className="lpa-modelviewer-header">3D VIEWER</p>
            </center>
          </div>
          <iframe
            title="3D VIEWER"
            className="pure-img lpa-modelviewer-iframe"
            src={this.state.sourcePath}
          />
          <div className="lpa-modelviewer-footer-container">
            <center>
              <p className="lpa-modelviewer-footer">{this.state.modelName.toUpperCase()}</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelViewer;
