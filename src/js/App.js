import React, { Component } from "react";
import HomeView from "./HomeView";
import ViewController from "./ViewContoller";

/* HomeScreen disappear after 2500ms */
/* Component state is used to determine when to disappear HomeScreen */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Uncomment for production */
      homescreen: true,
      bnclicked: false
      /* homescreen: false */
    };

    this.handleBrandNameClickA = this.handleBrandNameClickA.bind(this);
    this.handleImageLoadA = this.handleImageLoadA.bind(this);
  }

  /* Uncomment for production */
  handleImageLoadA(){
    setTimeout(() => {
      this.setState({
        homescreen: false
      });
    }, 2500);
  }

  handleBrandNameClickA(){
    this.setState({
      homescreen: true,
      bnclicked: true
    });
  }

  render() {
    if (this.state.homescreen) {
      if(this.state.bnclicked){
        setTimeout(() => {
          this.setState({
            homescreen: false,
            bnclicked: false
          });
        }, 2500);
      }
      return <HomeView onImageLoadA={this.handleImageLoadA}/>;
    } else {
      return <ViewController onBrandNameClickA={this.handleBrandNameClickA} />;
    }
  }
}

export default App;
