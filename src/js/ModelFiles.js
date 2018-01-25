import React, { Component } from "react";
import "../css/modelfiles.css";

class ModelFiles extends Component {
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
              <div className="pure-u-1 pure-u-md-1-2">
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .obj
                  </button>
                </center>
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .obj
                  </button>
                </center>
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .blend
                  </button>
                </center>
              </div>
              <div className="pure-u-1 pure-u-md-1-2">
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .stl
                  </button>
                </center>
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .max
                  </button>
                </center>
                <center>
                  <button className="pure-button lpa-modelfiles-files-btn">
                    .blend
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelFiles;
