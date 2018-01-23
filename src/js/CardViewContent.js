import React, { Component } from "react";
import "../css/cardviewcontent.css";
import CardsJSON from "../jsondata/cards.json";
import Card from "./Card";

/* Conditional rendering when screen width is between 768px to 1024px */
class CardViewContent extends Component {
  constructor(props) {
    super(props);

    this.cardViewContentList = [];
    this.errorMsg = "";

    this.state = {
      cardviewcontent : this.cardViewContentList
    };
  }

  errorHandler(msg) {
    console.log("Something went wrong");
    console.log("Error: " + msg);
  }

  getCardsJSONData(){
    return CardsJSON.cards;
  }

  getBrowserWindowWidth() {
    return Number(window.innerWidth);
  }

  isTabletMode(width) {
    let windowWidth = width;
    if (isNaN(windowWidth)) {
      this.errorMsg = "Browser window width is not a number";
      this.errorHandler(this.errorMsg);
      /* As window width is not available, length 3 is set as default */
      return false;
    }

    if (windowWidth >= 768 && windowWidth <= 1024) {
      return true;
    }

    return false;
  }

  getListLength(){
    return this.isTabletMode(this.getBrowserWindowWidth()) ? 2 : 3;
  }

  getCardList(listLength) {
    let cardListLength = listLength;
    let cardList = [];
    for (let i = 0; i < cardListLength; i++) {
      cardList[i] = [];
    }
    return cardList;
  }

  getCardComponentList(jsonCardsList) {
    let i = 0,j = 0, cardComponentListLength = 0, cardComponent, cardComponentList = [];
    let jsonCardsListLength = jsonCardsList.length;
    cardComponentList = this.getCardList(this.getListLength());
    cardComponentListLength = cardComponentList.length;

    while(j < jsonCardsListLength){
      i = i % cardComponentListLength;
      cardComponent = ( <Card cards={jsonCardsList[j]} key={jsonCardsList[j].model.name} /> );
      cardComponentList[i].push(cardComponent);
      i = i + 1;
      j = j + 1;
    }

    return cardComponentList;
  }

  getCardViewContentList(){
    let i=0, cardViewContent;
    let jsonCardsList = this.getCardsJSONData();
    let cardComponentList = this.getCardComponentList(jsonCardsList);
    let cardComponentListLength = cardComponentList.length;
    let cardViewContentList = this.getCardList(cardComponentListLength);
    while(i < cardComponentListLength){
      cardViewContent = ( <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3"> {cardComponentList[i]} </div> );
      cardViewContentList[i].push(cardViewContent);
      i = i + 1;
    }
    return cardViewContentList;
  }

  renderCardView(){
      this.cardViewContentList = this.getCardViewContentList();
      this.setState({
        cardviewcontent : this.cardViewContentList
      });
  }

  componentDidMount(){
    this.renderCardView();
  }

  render() {
    return (
      <div className="lpa-cardview-content">
        <div className="lpa-cardview-cardlist">
          {this.state.cardviewcontent}
        </div>
      </div>
    );
  }
}

export default CardViewContent;
