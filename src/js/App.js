import React, { Component } from "react";
import HomeView from "./HomeView";
import CardView from "./CardView";
import ModelView from "./ModelView";

/* HomeScreen disappear after 2500ms */
/* Component state is used to determine when to disappear HomeScreen */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Uncomment for production */
      /* homescreen: true */
      homescreen: false
    };
  }

  /* Uncomment for production */
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
      return <ModelView />;
    }
  }
}

export default App;
