import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Pagination from "../../components/Pagination/Pagination";

const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedRoutePanchayatAcademy extends React.Component {
  render() {
    const routePath =this.props.routePath;

    const display = this.props.articles[routePath].map(e => (
      <Route
        key={e}
        path={"/"+routePath+"/" + e.title}
        component={() => (
          <Pagination
            srcRequire={require("../../img/" + e.img)}
            route={routePath}
            title={e.title}
            post={e.post}
            titleList={this.props.articles[routePath].map(e => ({
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
            from={"/"+routePath+"/"}
            to={"/"+routePath+"/" + this.props.articles[routePath][0].title}
          />
          <Route render={() => <div>尚未開放功能</div>} />
        </Switch>
      </div>
    );
  }
}

const RoutePanchayatAcademy = connect(mapStateToProps)(ConnectedRoutePanchayatAcademy); //
export default RoutePanchayatAcademy;