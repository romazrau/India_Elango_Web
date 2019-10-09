import { DELETE_ALL } from "../constants/action-types";
const initialState = {
  articles: {
    about: [
      {
        title: "第一篇標題",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: "555555555555555555555555555555555555555555555555555555"
      },
      {
        title: "第二篇標題",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "55554444444444444444444444455555555555555555555555555555555"
      },
      {
        title: "第三篇標題",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: '<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>'
      }
    ],
    introduction: [
      {
        title: "第一篇標題2",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: "555555555555555555555555555555555555555555555555555555"
      },
      {
        title: "第二篇標題2",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "55554444444444444444444444455555555555555555555555555555555"
      },
      {
        title: "第三篇標題2",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: '<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>'
      }
    ]
  }
};
function rootReducer(state = initialState, action) {
  if (action.type === DELETE_ALL) {
    // state.articles.push(action.payload);
    return Object.assign({}, state, {
      articles: []
    });
  }
  return state;
}
export default rootReducer;
