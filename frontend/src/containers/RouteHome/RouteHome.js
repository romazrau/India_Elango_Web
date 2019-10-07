import React from "react";

import NewsCardGroup from "../NewsCardGroup/NewsCardGroup";
// import HomeCarousels from "../../containers/HomeCarousels/HomeCarousels";
import Jumbo from "../Jumbotron/Jumbotron";
import ImgHightlight from "../../components/ImgHightlight/ImgHightlight"

class RouteHome extends React.Component {

  render() {
    return (
        <div>
        <Jumbo />
        {/* <HomeCarousels></HomeCarousels> */}
        <ImgHightlight srcRequire={require("../../img/imghightlight.jpg")} text={"“Youth are the Seeds of the Nation prepared to bury themselves”"}/>
        <NewsCardGroup></NewsCardGroup>
      </div>
    );
  }
}

export default RouteHome;