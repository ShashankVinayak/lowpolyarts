import React, { Component } from "react";
import HomeView from "./HomeView";
import ViewController from "./ViewContoller";

/* HomeScreen disappear after 2500ms */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homescreen: true,
      bnclicked: false
    };

    this.handleBrandNameClickA = this.handleBrandNameClickA.bind(this);
    this.handleImageLoadA = this.handleImageLoadA.bind(this);
  }

  handleImageLoadA(){
    setTimeout(() => {
      this.setState({
        homescreen: false,
        bnclicked: false
      });
    }, 1500);
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
        this.handleImageLoadA();
      }
      return <HomeView onImageLoadA={this.handleImageLoadA}/>;
    } else {
      return <ViewController onBrandNameClickA={this.handleBrandNameClickA} />;
    }
  }
}

export default App;
