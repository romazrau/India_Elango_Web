import React from "react";
import { CardDeck } from "react-bootstrap"; //, NavDropdown

import NewsCard from "../../components/NewsCard/NewsCard";
import classes from "./NewsCardGroup.module.css";

//新聞陣列分別輸入src/img下的圖片名稱、要開啟的URL、新聞短述
class NewsCardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //  "{新聞的照片(放在img裡的名稱) + 跳轉URL  + 介紹 "} *N個
      news: [
        [
          "bear.jpg",
          "#50",
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        ],
        [
          "bear.jpg",
          "#60",
          "This card has supporting text below as a natural lead-in to additional content."
        ],
        [
          "bear.jpg",
          "https://www.facebook.com/",
          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
        ]
      ]
    };
  }

  newsCardClick = url => {
    console.log("newsCard clicked. URL is " + url)
    window.open(url);
    // this.props.history.push("#info");
  };

  render() {
    let display = this.state.news.map(e => (
      <NewsCard
        srcRequire={require("../../img/" + e[0])}
        onclick={() => this.newsCardClick(e[1])}
        text={e[2]}
        key={e}
      ></NewsCard>
    ));
    return (
      <div className={classes.cardDeck}>
        <h2>News</h2>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <CardDeck>{display}</CardDeck>
      </div>
    );
  }
}

export default NewsCardGroup;
