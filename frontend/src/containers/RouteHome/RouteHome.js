import React from "react";

import NewsCardGroup from "../NewsCardGroup/NewsCardGroup";
import Jumbo from "../Jumbotron/Jumbotron";
import ImgHightlight from "../../components/ImgHightlight/ImgHightlight"
import BlockAboutElango from "../BlockAboutElango/BlockAboutElango"
import BlockTrustSG from "../BlockTrustSG/BlockTrustSG"

class RouteHome extends React.Component {

  render() {
    return (
        <div>
        <Jumbo />
        <img src={require("../../img/PhilosophyPracticeSustainableEconomicNetwork.jpg")} alt="測試用圖片"/>
        <BlockAboutElango></BlockAboutElango>
        <NewsCardGroup></NewsCardGroup>
        <BlockTrustSG></BlockTrustSG>
        <ImgHightlight srcRequire={require("../../img/imghightlight.jpg")} text={"“Youth are the Seeds of the Nation prepared to bury themselves”"}/>
      </div>
    );
  }
}

export default RouteHome;