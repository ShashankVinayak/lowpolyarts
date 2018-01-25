import React, { Component } from "react";
import "../css/modelviewer.css";

class ModelViewer extends Component{
  render(){
    return (
      <div className="lpa-modelviewer">
        <div className="lpa-modelviewer-3dview-container">
          <div className="lpa-modelviewer-header-container">
            <center><p className="lpa-modelviewer-header">3D VIEWER</p></center>
          </div>
          <iframe className="pure-img lpa-modelviewer-iframe" src="webplayer/webplayer.html?load=../lowpolyelephant.json&autorotate&show_fps&"></iframe>
          <div className="lpa-modelviewer-footer-container">
            <center><p className="lpa-modelviewer-footer">ELEPHANT</p></center>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelViewer;