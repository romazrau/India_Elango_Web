import React from "react";

import NewsCardGroup from "../NewsCardGroup/NewsCardGroup";
import Jumbo from "../Jumbotron/Jumbotron";
import ImgHightlight from "../../components/ImgHightlight/ImgHightlight"
import BlockAboutElango from "../BlockAboutElango/BlockAboutElango"
import BlockTrustSG from "../BlockTrustSG/BlockTrustSG"
import BlockSDGsTracker from "../BlockSDGsTracker/BlockSDGsTracker"
import FullWidthVideo from "../FullWidthVideo/FullWidthVideo"
import BlockVideoResouce from "../BlockVideoResouce/BlockVideoResouce"

class RouteHome extends React.Component {

  render() {
    return (
      <div>
        <FullWidthVideo></FullWidthVideo>
        {/*<Jumbo />*/}
        <BlockAboutElango></BlockAboutElango>
        <NewsCardGroup></NewsCardGroup>
        <BlockTrustSG></BlockTrustSG>
        <ImgHightlight srcRequire={require("../../img/imghightlight.jpg")} text={"“Youth are the Seeds of the Nation prepared to bury themselves”"}/>
        <BlockSDGsTracker></BlockSDGsTracker>
        <BlockVideoResouce></BlockVideoResouce>
      </div>
    );
  }
}

export default RouteHome;
