import { DELETE_ALL } from "../constants/action-types";
/*
articles: {
    About: [
      {
        title: "Background of India",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: "<p>&emsp;&emsp;Poverty is one of the greatest challenges facing human development, and reducing poverty has always been an important goal of international organizations. Although since the 2000s global poverty rate reduced by half, but there are still many people living in extreme poverty, especially in China and India, two developing countries, the two combined sustainable, poverty reduction and the relationship between state power.<br/><br/>&emsp;&emsp;Since the Chinese economic reform in 1978, in the context of globalization, from the 1980s to 2010, 60% of the population under the extreme poverty line ($1.5) has been reduced. In contrast, India's economy is only half the size of China, and so far only 20% of the poverty reduction target has been achieved. Even though the populations and territories of these two countries are similar, and the ethnic and regional cultures are quite complex, the differences in their political operations are markedly different - India is a democracy and China is an authoritarian state. This allows scholars tend to come to the discussion: authoritarian regimes may be a better solution to eliminate poverty, at least in terms of improving the income and promote economic process. However, China's way of reducing poverty is actually at the expense of social sustainability and environmental sustainability. In India, citizens gained the power to democratically elect their panchayat leader after 1996, which is the lowest administrative size in India. Political decentralization is a key different power mechanism difference between China and India.<br/><br/>&emsp;&emsp;This report is particularly concerned about the case of Kuthambakkam village, 30 km from Chennai, the capital of Tamil Nadu, India.The village was as poor as most rural villages in India but led by the village president Elango Rangaswamy. Over the past two decades, it has undergone dramatic transformation poverty (Raju and Dwivedula 2009). As an engineer, social reformer and politician, Elango is committed to creating jobs, improving infrastructure, protecting the environment and promoting capacity building for disadvantaged groups such as the poor, women and the elderly. To date, more than 80% of families in Kuthambakkam have escaped the poverty line, with an average household income of INR 15,000 (approximately US$ 210). There is still huge poverty and inequality in India, and 80% of households in many villages are in a state of extreme poverty, with household incomes below 5,000 rupees (United Nations High Level Political Forum, 2017). The case of Kuthambakkam is representative of India's poverty alleviation process and should receive more academic attention than it has until now.</p>"
      },
      {
        title: "第二篇標題",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "55554444444444444444444444455555555555555555555555555555555"
      },
    ],
    Introduction: [
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
        title: "第2篇標題2",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: '<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>'
      }
    ]
  }
*/

const initialState = {
  articles: {
    About: [
      {
        title: "Background of India",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: "<p>&emsp;&emsp;Poverty is one of the greatest challenges facing human development, and reducing poverty has always been an important goal of international organizations. Although since the 2000s global poverty rate reduced by half, but there are still many people living in extreme poverty, especially in China and India, two developing countries, the two combined sustainable, poverty reduction and the relationship between state power.</p>"+
        "<p>&emsp;&emsp;Since the Chinese economic reform in 1978, in the context of globalization, from the 1980s to 2010, 60% of the population under the extreme poverty line ($1.5) has been reduced. In contrast, India's economy is only half the size of China, and so far only 20% of the poverty reduction target has been achieved. Even though the populations and territories of these two countries are similar, and the ethnic and regional cultures are quite complex, the differences in their political operations are markedly different - India is a democracy and China is an authoritarian state. This allows scholars tend to come to the discussion: authoritarian regimes may be a better solution to eliminate poverty, at least in terms of improving the income and promote economic process. However, China's way of reducing poverty is actually at the expense of social sustainability and environmental sustainability. In India, citizens gained the power to democratically elect their panchayat leader after 1996, which is the lowest administrative size in India. Political decentralization is a key different power mechanism difference between China and India.</p>"+
        "<p>&emsp;&emsp;This report is particularly concerned about the case of Kuthambakkam village, 30 km from Chennai, the capital of Tamil Nadu, India.The village was as poor as most rural villages in India but led by the village president Elango Rangaswamy. Over the past two decades, it has undergone dramatic transformation poverty (Raju and Dwivedula 2009). As an engineer, social reformer and politician, Elango is committed to creating jobs, improving infrastructure, protecting the environment and promoting capacity building for disadvantaged groups such as the poor, women and the elderly. To date, more than 80% of families in Kuthambakkam have escaped the poverty line, with an average household income of INR 15,000 (approximately US$ 210). There is still huge poverty and inequality in India, and 80% of households in many villages are in a state of extreme poverty, with household incomes below 5,000 rupees (United Nations High Level Political Forum, 2017). The case of Kuthambakkam is representative of India's poverty alleviation process and should receive more academic attention than it has until now.</p>"+
        "<img src='/static/media/TheDistributionofPopulationNearChennaiArea.4db4c380.png'} alt='The Distribution of Population Near Chennai Area'>"+
        "<h6>The Distribution of Population Near Chennai Area</h6>"+
        '<p>&emsp;&emsp;India is a rising country, but it also faces problems that need to be improved, such as poverty, regional inequality, environmental damage, countryside hollow out and gender equality have not been fully implemented. Although the country does not seem to be poor, the country faces the largest gap between the rich and the poor. In the "Voluntary National Review (VNR)" report by the Indian government in response to the Sustainable Development Goals (SDGs), basic physiological needs such as poverty and hunger are still urgently needed to be improved.</p>'
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
    Introduction: [
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
  },
  news:[  //  "{新聞的照片(放在img裡的名稱) + 跳轉URL  + 介紹 "} *N個
    {
      img:"bear.jpg",
      url:"#50",
      date:"30-03-2019",
      title:"我是誰2",
      text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      img:"imghightlight.jpg",
      url:"#60",
      date:"30-04-2019",
      title:"我是誰",
      text:"This card has supporting text below as a natural lead-in to additional content."
    },
    {
      img:"bear.jpg",
      url:"https://www.facebook.com/",
      date:"30-05-2019",
      title:"This card has supporting text below as a natural lead-in to additional content.",
      text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
    }
  ]
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
