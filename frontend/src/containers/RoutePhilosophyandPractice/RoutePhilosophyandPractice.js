import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Pagination from "../../components/Pagination/Pagination";

const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedRouteIntroduction extends React.Component {
  render() {
    const display = this.props.articles["Philosophy&Practice"].map(e => (
      <Route
        key={e}
        path={"/Philosophy&Practice/" + e.title}
        component={() => (
          <Pagination
            srcRequire={require("../../img/" + e.img)}
            route="Philosophy&Practice"
            title={e.title}
            post={e.post}
            titleList={this.props.articles["Philosophy&Practice"].map(e => ({
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
            from="/Philosophy&Practice/"
            to={"/Philosophy&Practice/" + this.props.articles["Philosophy&Practice"][0].title}
          />
          <Route render={() => <div>尚未開放功能</div>} />
        </Switch>
      </div>
    );
  }
}

const RouteIntroduction = connect(mapStateToProps)(ConnectedRouteIntroduction); //
export default RouteIntroduction;