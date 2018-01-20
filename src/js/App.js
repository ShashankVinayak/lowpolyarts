import React, { Component } from "react";
import HomeView from "./HomeView";
import CardView from "./CardView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homescreen: false
    };
  }

/*   componentDidMount() {
    setTimeout(() => {
      this.setState({
        homescreen: false
      });
    }, 2500);
  } */

  render() {
    if (this.state.homescreen) {
      return <HomeView />;
    } else {
      return <CardView />;
    }
  }
}

export default App;
