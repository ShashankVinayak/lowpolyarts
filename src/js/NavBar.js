import React, { Component } from "react";
import "../css/navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    /*     this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this); */
    this.handleBrandNameClickNB = this.handleBrandNameClickNB.bind(this);
  }

  /*   handleChange(event) {
    this.setState({
      value: event.target.value
    });
  } */

  handleBrandNameClickNB() {
    if (this.props.onBrandNameClickCV) {
      this.props.onBrandNameClickCV();
    } else if (this.props.onBrandNameClickMV) {
      this.props.onBrandNameClickMV();
    }
  }

  render() {
    return (
      <header className="lpa-cardview-header">
        <nav>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-5">
              <center>
                <p
                  className="lpa-cardview-brand"
                  onClick={this.handleBrandNameClickNB}
                >
                  <span className="lpa-cardview-brandname-red">LOW</span>
                  <span className="lpa-cardview-brandname-green">POLY</span>
                  <span className="lpa-cardview-brandname-blue">ARTS</span>
                </p>
              </center>
            </div>
            <div className="pure-u-md-3-5" />
            <div className="pure-u-md-1-5" />
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;

/* <div>
<input
  type="text"
  placeholder="Search..."
  className="lpa-cardview-search-bar"
  value={this.state.value}
  onChange={this.handleChange}
/>
</div> */
