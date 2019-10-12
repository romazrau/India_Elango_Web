import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar";
import RouteHome from "./containers/RouteHome/RouteHome";
import RouteAcademic from "./containers/RouteAcademic/RouteAcademic"
import RouteSDGs from "./containers/RouteSDGs/RouteSDGs"
import RouteContactDonate from "./containers/RouteContactDonate/RouteContactDonate"
import RouteArticles from "./containers/RouteArticles/RouteArticles"

const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedRouteApp extends React.Component {
  render() {
    const displayRouteArticles = Object.keys(this.props.articles).map(e => (
      <Route path={"/" + e} key={e} component={() => <RouteArticles routePath={e} />} />
    ));
    
    console.log()
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <HeaderNavBar></HeaderNavBar>
           
            <Switch>
              <Route exact path="/" component={RouteHome} />
              {displayRouteArticles}
              <Route path="/academic" component={RouteAcademic} />
              <Route path="/SDGs" component={RouteSDGs} />
              <Route path="/Contact&Donate" component={RouteContactDonate} />
              <Redirect from="/home" to="/" />
              <Route render={() => <div>尚未開放功能(路由錯誤)</div>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}
}
const App = connect(mapStateToProps)(ConnectedRouteApp); //
export default App;

