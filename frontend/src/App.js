import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar";
import RouteHome from "./containers/RouteHome/RouteHome";
import RouteAbout from "./containers/RouteAbout/RouteAbout"
import RoutePhilosophyandPractice from "./containers/RoutePhilosophyandPractice/RoutePhilosophyandPractice"
import RoutePanchayatAcademy from "./containers/RoutePanchayatAcademy/RoutePanchayatAcademy"
import RouteAcademic from "./containers/RouteAcademic/RouteAcademic"
import RouteSDGs from "./containers/RouteSDGs/RouteSDGs"
import RouteContactDonate from "./containers/RouteContactDonate/RouteContactDonate"
import Footer from "./containers/Footer/Footer"
//RouteIntroduction  RouteAcademic  RouteSDGs RouteContactDonate


const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedRouteApp extends React.Component {

  render() {

    console.log()
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <HeaderNavBar></HeaderNavBar>

            <Switch>
              <Route exact path="/" component={RouteHome} />
              <Route path="/about" component={RouteAbout} />
              <Route path="/Philosophy&Practice" component={RoutePhilosophyandPractice} />
              <Route path={"/"+Object.keys(this.props.articles)[2]} component={RoutePanchayatAcademy} />
              <Route path="/academic" component={RouteAcademic} />
              <Route path="/SDGs" component={RouteSDGs} />
              <Route path="/Contact&Donate" component={RouteContactDonate} />
              <Redirect from="/home" to="/" />
              <Route render={() => <div>尚未開放功能(路由錯誤)</div>} />
            </Switch>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
}
}
const App = connect(mapStateToProps)(ConnectedRouteApp); //
export default App;
