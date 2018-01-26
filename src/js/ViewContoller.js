import  React, { Component } from "react";
import CardView from "./CardView";
import ModelView from "./ModelView";

class ViewController extends Component {
  constructor(props){
    super(props);

    this.state = {
      view: "card",
      id: ""
    };

    this.handleCardClickVC = this.handleCardClickVC.bind(this);
    this.handleBrandNameClickVC = this.handleBrandNameClickVC.bind(this);
  }

  handleCardClickVC(modelName){
    console.log(modelName);
    this.setState({
      view: "model",
      id: modelName
    });
  }

  handleBrandNameClickVC(){
    this.props.onBrandNameClickA();
  }

  render(){
    if(this.state.view === "card"){
      return <CardView onCardClickVC={this.handleCardClickVC} onBrandNameClickVC={this.handleBrandNameClickVC} /> ;
    }else {
      return <ModelView id={this.state.id} onBrandNameClickVC={this.handleBrandNameClickVC} /> ;
    }
  }
}

export default ViewController;