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
        ["imghightlight.jpg","第三篇標題","易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答，父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。"]
      ]
    };
  }

  render() {

    const display= this.state.data.map(e=>(
      <Route
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
