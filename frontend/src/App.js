import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar";
import RouteHome from "./containers/RouteHome/RouteHome";
import RouteAbout from "./containers/RouteAbout/RouteAbout"
import RoutePhilosophyandPractice from "./containers/RoutePhilosophyandPractice/RoutePhilosophyandPractice"
import RouteIntroduction from "./containers/RouteIntroduction/RouteIntroduction"
import RouteAcademic from "./containers/RouteAcademic/RouteAcademic"
import RouteSDGs from "./containers/RouteSDGs/RouteSDGs"
import RouteContactDonate from "./containers/RouteContactDonate/RouteContactDonate"
//RouteIntroduction  RouteAcademic  RouteSDGs RouteContactDonate

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <HeaderNavBar></HeaderNavBar>
          <Switch>
            <Route exact path="/" component={RouteHome} />
            <Route path="/about" component={RouteAbout} />
            <Route path="/Philosophy&Practice" component={RoutePhilosophyandPractice} />
            <Route path="/Panchayat%" component={RouteIntroduction} />
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

export default App;
