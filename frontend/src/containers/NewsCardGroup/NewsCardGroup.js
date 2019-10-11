import React from "react";
import { CardDeck } from "react-bootstrap"; //, NavDropdown
import { connect } from "react-redux";

import NewsCard from "../../components/NewsCard/NewsCard";
import classes from "./NewsCardGroup.module.css";

const mapStateToProps = state => {
  return { news: state.news };
};
class ConnectedNewsCardGroup extends React.Component {

  newsCardClick = url => {
    console.log("newsCard clicked. URL is " + url)
    window.open(url);
    // this.props.history.push("#info");
  };

  render() {
    let display = this.props.news.map(e => (
      <NewsCard
        srcRequire={require("../../img/" + e.img)}
        onclick={() => this.newsCardClick(e.url)}
        text={e.text}
        title={e.title}
        date={e.date}
        key={e.title}
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

const NewsCardGroup = connect(mapStateToProps)(ConnectedNewsCardGroup); //
export default NewsCardGroup;
