import React from "react";

import NewsCardGroup from "../NewsCardGroup/NewsCardGroup";
import Jumbo from "../Jumbotron/Jumbotron";
import ImgHightlight from "../../components/ImgHightlight/ImgHightlight"
import BlockAboutElango from "../BlockAboutElango/BlockAboutElango"
import BlockTrustSG from "../BlockTrustSG/BlockTrustSG"
import BlockSDGsTracker from "../BlockSDGsTracker/BlockSDGsTracker"
import FullWidthVideo from "../FullWidthVideo/FullWidthVideo"
import PanchayatAcademy from "../PanchayatAcademy/PanchayatAcademy"

class RouteHome extends React.Component {

  render() {
    return (
      <div>
        <FullWidthVideo></FullWidthVideo>
        <BlockAboutElango></BlockAboutElango>
        <NewsCardGroup></NewsCardGroup>
        <BlockTrustSG></BlockTrustSG>
        <ImgHightlight srcRequire={require("../../img/imghightlight.jpg")} text={"“Youth are the Seeds of the Nation prepared to bury themselves”"}/>
        <PanchayatAcademy></PanchayatAcademy>
        <Jumbo />
        <BlockSDGsTracker></BlockSDGsTracker>
      </div>
    );
  }
}

export default RouteHome;
