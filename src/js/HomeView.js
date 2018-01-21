import React, { Component } from "react";
import "../css/homeview.css";

/* Displays background image and  author text */
class HomeView extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <div className="lpa-homeview">
            <div className="lpa-homeview-bkg" />
            <footer className="lpa-homeview-footer">
              <center><p>by Shashank Vinayak</p></center>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
