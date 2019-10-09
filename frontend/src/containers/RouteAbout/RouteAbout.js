import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Pagination from "../../components/Pagination/Pagination";

class RouteAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        ["BlockAboutElango.jpg","第一篇標題","概述：弟子規原名〈訓蒙文〉，為清朝康熙年間秀才李毓秀所作。其內容採用《論語》學而篇第六條：「弟子入則孝，出則弟，謹而信，汎愛眾，而親仁，行有餘 力，則以學文。」的文義以三字一句，兩句一韻編纂而成，分為五個部份加以演述；具體列舉出為人子弟在家、出外、待人接物、求學應有的禮儀與規範，特別講求 家庭教育與生活教育。後經清朝賈存仁修訂改編，並改名為〈弟子規〉，是啟蒙養正，教育子弟敦倫盡份防邪存誠，養成忠厚家風的最佳讀物。"],
        ["BlockTrustSG.jpg","第二篇標題","易解：弟子規這本書，是依據至聖先師孔子的教誨而編成的生活規範。首先在日常生活中，要做到孝順父母，友愛兄弟姊妹。其次在一切日常生活言語行為中要小心 謹慎，要講信用。和大眾相處時要平等博愛，並且親近有仁德的人，向他學習，這些都是很重要非做不可的事，如果做了之後，還有多餘的時間精力，就應該好好的 學習六藝等其他有益的學問。"],
        ["imghightlight.jpg","第三篇標題",<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答<img alt="" src="data:image/jpeg;base64,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"/>，父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>]
      ]
    };
  }

  render() {

    const display= this.state.data.map(e=>(
      <Route
            key={e}
            path={"/about/" + e[1]}
            component={() => (
              <Pagination
                srcRequire={require("../../img/"+e[0])}
                title={e[1]}
                post={
                  e[2]
                }
                postList={
                  this.state.data.map(e=>e[1])
                }
              />
            )}
          />
    ))

    return (
      <div>
        <Switch>
          {display}
          <Redirect from="/about/" to={"/about/"+this.state.data[0][1]} />
          <Route render={() => <div>尚未開放功能</div>} />
        </Switch>
      </div>
    );
  }
}

export default RouteAbout;
