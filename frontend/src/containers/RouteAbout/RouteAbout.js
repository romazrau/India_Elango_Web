import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Pagination from "../../components/Pagination/Pagination";

const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedRouteAbout extends React.Component {

  render() {
    const display = this.props.articles.About.map(e => (
      <Route
        key={e}
        path={"/About/" + e.title}
        component={() => (
          <Pagination
            srcRequire={require("../../img/" + e.img)}
            route="About"
            title={e.title}
            post={e.post}
            titleList={this.props.articles.About.map(e => ({
              title: e.title,
              subtitleList: e.subtitleList
            }))}
          />
        )}
      />
    ));

    return (
      <div>
        <Switch>
          {display}
          <Redirect
            from="/About/"
            to={"/About/" + this.props.articles.About[0].title}
          />
          <Route render={() => <div>尚未開放功能</div>} />
        </Switch>
      </div>
    );
  }
}

const RouteAbout = connect(mapStateToProps)(ConnectedRouteAbout); //
export default RouteAbout;

