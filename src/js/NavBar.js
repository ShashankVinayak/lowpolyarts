import React, { Component } from "react";
import "../css/navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <header className="lpa-cardview-header">
        <nav>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-5">
              <p className="lpa-cardview-brand">LowPolyArts</p>
            </div>
            <div className="pure-u-md-3-5" />
            <div className="pure-u-1 pure-u-md-1-5">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="lpa-cardview-search-bar"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
