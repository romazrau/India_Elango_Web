import React from "react";
import { CardDeck } from "react-bootstrap"; //, NavDropdown

import NewsCard from "../../components/NewsCard/NewsCard";
import classes from "./NewsCardGroup.module.css"

class NewsCardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          news: [
              ["bear.jpg","This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."],
              ["bear.jpg","This card has supporting text below as a natural lead-in to additional content."],
              ["bear.jpg","This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."]
          ]
        };
      }

  render() {
    let display = this.state.news.map(
        e => (
            <NewsCard srcRequire={require("../../img/"+e[0])} text={e[1]} key={e}></NewsCard>
        )
    )
    return (
      <CardDeck className={classes.cardDeck}>
        {display}
      </CardDeck>
    );
  }
}

export default NewsCardGroup;
