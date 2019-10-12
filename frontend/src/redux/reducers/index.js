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
    ]
  }
*/

//articles文章格式:
//段落小標用<h5 id=" .. "> .. </h5>  ,id請勿重複並跟著subtitle設定
//內容每段用用<p>&emsp;&emsp; .. </p>
//圖片:  <img src='/static/media/...' alt='T替代文字'>，先去別的頁面img require()，在瀏覽器內f12看src，再複製到這裡的src
//圖片敘述文字用 <h6> .. </h6>
const initialState = {
  articles: {
    About: [
      {
        title: "Dr. Rangaswamy Elango",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "His Story", id: "aboutHisStory0101" },
          { subtitle: "His Awards", id: "aboutHisAwards0102" }
        ],
        post:
          "<h5 id='aboutHisStory0101'>His Story</h5>" +
          "<p>&emsp;&emsp;When then Prime Minister Rajiv Gandhi was promoting the idea of 'Panchayati Raj' to empower villages, a young man in Kuthambakkam village, Tamil Nadu was sitting up and taking notice. Today, 57-year-old Rangaswamy Elango has turned his village into an inspiring habitat.</p>" +
          "<p>&emsp;&emsp;A village that was fighting a battle against the illicit liquor trade leading to poverty, drunken brawls, miserable health conditions, and broken family relationships has today turned seven hamlets with 50 percent Dalit population into a standing example of equality. In 2000, under the leadership of Rangaswamy, for the first time in India, 50 twin houses were built in a single colony called ‘Samathuvapuram’ (place for equality) where, in every twin house, one Dalit and one non-Dalit lived. This scheme was later adopted by the Tamil Nadu government and extended to the entire state.</p>" +
          "<p>&emsp;&emsp;Born on November 12, 1960, Rangaswamy resigned from his government job to contest the village elections after he saw the miserable conditions liquor had created. In 1992, during the regime of ninth PM Narasimha Rao, the government passed the 73rd Amendment in the Parliament to implement Panchayati Raj in the entire country. Based on the new act, the first elections for panchayats were held in 1996. This was also the year Rangaswamy stood for elections and was elected with a three-fourths majority to become the first president of the village, says an Action 2020 report.</p>" +
          "<p>&emsp;&emsp;This new development gave him the much-needed power to make a difference in his village. He started with establishing a transparent gram sabha that worked with full powers. With due diligence, he brought peace between families by eradicating illicit liquor. He created many job and educational opportunities.</p>" +
          "<p>&emsp;&emsp;He believes that the panchayat leaders in the country can be more empowered, which was why he started a network for panchayat presidents under the name 'Panchayat Academy'. So far, he has trained 700 panchayat presidents. Speaking to GoodNewsIndia, he said, “In Tamil Nadu alone, I have personally identified 1,000 honest, successful presidents. We have begun to network and stay connected. This number will only increase. I am sure similar is the case in other states. I am starting a panchayat academy to teach the presidents their powers and villages' entitlement. All these will rouse people's expectations. There is an emerging force not visible to the media and most people. It is at work changing India from below. This force cannot be stemmed.”</p>" +
          "<p>Read more at: https://yourstory.com/2017/10/rangaswamy-elango-dalit-kuthambakkam-village-chennai</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutHisAwards0102'>His Awards</h5>" +
          "<p>&emsp;&emsp;The transformation of the village has also confirmed Elango in India and abroad. The success of Kuthambakkam has not only become the only Asian case in the 'TOMORROW' documentary filmed by Nature in 2012 in response to climate change and community mitigation. In the following year, Elango was nominated for 'MAN OF THE YEAR 2013' by 'THE WEEK' magazine. Chennai's local TV station Pudhiya Thalaimurai TV praised Elango as the best industrialist and tried to make village autonomy sprout in the corner of Chennai. When villagers have jobs and regain equality and dignity, the village economy will gradually become active and improve the quality of life. This seems to echo Dr. Elango's annotation 'Sustainable Development with Happiness' for the village's sustainable development</p>" +
          "<img src='/static/media/aboutHisAwardDrElango.2f1fc705.jpg' alt='Dr. Elango' />" +
          "<h6>Dr. Elango (Left 1)</h6>" +
          "<ul>" +
          "<li>2002, Ashoka Fellowship (the world's leading social entrepreneurs as Ashoka Fellows)</li>" +
          "<li>2007, Shriram Ilakkiya Kazhagam's Aram Award for Tirukkura (greatest works ever written on ethics and morality, chiefly secular ethics, it is known for its universality and non-denominational nature)</li>" +
          "<li>2009, “CNN-IBN Real Heroes Award”</li>" +
          "<li>2009, “One India One People” Outstanding Indian Award’</li>" +
          "<li>2012, Tomorrow (Nature's Documentary for Climate Change Adaptation), one of twelve cases in the world and the only one in Asia</li>" +
          "<li>2013, The Man of the Year of the Week (India)</li>" +
          "<li>2014, Sat Paul Mittal National Award (for rendering selfless services to the suffering humanity)</li>" +
          "<li>2016, UWC Championship Award</li>" +
          "</ul>" +
          "<img src='/static/media/aboutHisAward2016UWCChampionshipAward.ddeeaa7a.jpg' alt=''/>"
      },
      {
        title: "Kuthambakkam, Tamil Nadu, India",
        img: "imghightlight.jpg",
        subtitleList: [
          { subtitle: "Background of India", id: "aboutBackgroundofIndia0201" },
          { subtitle: "Kuthambakkam Village", id: "aboutHisKuthambakkamVillage0202" },
          { subtitle: "Issues in the Village", id: "aboutIssuesintheVillage0203" }
        ],
        post:
          "<h5 id='aboutBackgroundofIndia0201'>Background of India</h5>"+
          "<p>&emsp;&emsp;Poverty is one of the greatest challenges facing human development and reducing poverty has always been an important goal of international organizations. Although since the 2000s global poverty rate reduced by half, but there are still many people living in extreme poverty, especially in China and India, two developing countries, the two combined sustainable, poverty reduction and the relationship between state power.</p>" +
          "<p>&emsp;&emsp;Since the Chinese economic reform in 1978, in the context of globalization, from the 1980s to 2010, 60% of the population under the extreme poverty line ($1.5) has been reduced. In contrast, India's economy is only half the size of China, and so far, only 20% of the poverty reduction target has been achieved. Even though the populations and territories of these two countries are similar, and the ethnic and regional cultures are quite complex, the differences in their political operations are markedly different - India is a democracy and China is an authoritarian state. This allows scholars tend to come to the discussion: authoritarian regimes may be a better solution to eliminate poverty, at least in terms of improving the income and promote economic process. However, China's way of reducing poverty is at the expense of social sustainability and environmental sustainability. In India, citizens gained the power to democratically elect their panchayat leader after 1996, which is the lowest administrative size in India. Political decentralization is a key different power mechanism difference between China and India.</p>" +
          "<p>&emsp;&emsp;This report is particularly concerned about the case of Kuthambakkam village, 30 km from Chennai, the capital of Tamil Nadu, India. The village was as poor as most rural villages in India but led by the village president Elango Rangaswamy. Over the past two decades, it has undergone dramatic transformation poverty (Raju and Dwivedula 2009). As an engineer, social reformer and politician, Elango is committed to creating jobs, improving infrastructure, protecting the environment and promoting capacity building for disadvantaged groups such as the poor, women and the elderly. To date, more than 80% of families in Kuthambakkam have escaped the poverty line, with an average household income of INR 15,000 (approximately US$ 210). There is still huge poverty and inequality in India, and 80% of households in many villages are in a state of extreme poverty, with household incomes below 5,000 rupees (United Nations High Level Political Forum, 2017). The case of Kuthambakkam is representative of India's poverty alleviation process and should receive more academic attention than it has until now.</p>" +
          "<img src='/static/media/aboutTheDistributionofPopulationNearChennaiArea.4db4c380.png' alt='' />"+
          "<h6>The Distribution of Population Near Chennai Area</h6>"+
          "<p>&emsp;&emsp;India is a rising country, but it also faces problems that need to be improved, such as poverty, regional inequality, environmental damage, countryside hollows out and gender equality have not been fully implemented. Although the country does not seem to be poor, the country faces the largest gap between the rich and the poor. In the 'Voluntary National Review (VNR)' report by the Indian government in response to the Sustainable Development Goals (SDGs), basic physiological needs such as poverty and hunger are still urgently needed to be improved.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutHisKuthambakkamVillage0202'>Kuthambakkam Village</h5>"+
          "<p>&emsp;&emsp;Kuthambakkam village, near Chennai, was directly affected by the expansion of urbanization. Elango was born as a low caste but became the first engineer and doctor of Kuthambakkam. In order to establish a vision of the village's sustainable economy and local self-government, he gave up his work and returned to his hometown to unite with the youth. Elango prevents large companies from entering the village and undermining social structures. At the same time, he introduced industrial technology improvement to drive rural production capacity and formulated a long-term development plan for the village to achieve his goal of promoting village sustainability.</p>" +
          "<img src='/static/media/aboutDrElangowithvillagers.0ac12199.jpg' alt=''>"+
          "<h6>Dr. Elango with villagers</h6>"+
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutIssuesintheVillage0203'>Issues in the Village</h5>"+
          "<p>&emsp;&emsp;During his tenure as panchayat leader, Elango to empower modes include mutual economic, network growth, social development, etc. to promote village autonomy. Participatory reforms have successfully addressed the deep problems of caste and gender inequality and have also improved the village economy by creating labor opportunities. The small factory built by Elango directly helped women and low-casting socially disadvantaged classes, raising the average income of households from 4,000 rupees to 20,000 rupees. For village development, poverty alleviation is only a phased goal. In the future, the goal of village cultivation will be self-sufficient, self-governing, and prosperous.</p>" +
          "<table><tbody>"+
          "<tr>"+
          "<td></td>"+
          "<td>Average number of employed persons per household</td>"+
          "<td>Average household size</td>"+
          "<td>Average per capita monthly income (Rp.)</td>"+
          "<td>Household monthly income at average (Rp.)</td>"+
          "</tr>"+
          "<tr>"+
          "<td>Kuthambakkam</td>"+
          "<td>1.5</td>"+
          "<td>3.7</td>"+
          "<td>11,568 (165usd)</td>"+
          "<td>16,774</td>"+
          "</tr>"+
          "<tr>"+
          "<td>Tamil Nadu urban</td>"+
          "<td>1.7</td>"+
          "<td>4.4</td>"+
          "<td>10,073 (139usd)</td>"+
          "<td>16,621</td>"+
          "</tr>"+
          "<tr>"+
          "<td>Tamil Nadu rural</td>"+
          "<td>1.9</td>"+
          "<td>5.0</td>"+
          "<td>7,456 (106usd)</td>"+
          "<td>14,167</td>"+
          "</tr>"+
          "<tr>"+
          "<td>India</td>"+
          "<td>1.4</td>"+
          "<td>4.8</td>"+
          "<td>9,822 (135usd)</td>"+
          "<td>13,262</td>"+
          "</tr>"+
          "</tbody></table>"+
          "<h6>Household Income Table</h6>"
      },
      {
        title: "Trust for Village Self-governance",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "Self-Help Group", id: "aboutSelfHelpGroup0301" },
          { subtitle: "The establishment of the TVSG", id: "aboutTheestablishmentoftheTVSG0302" }
        ],
        post:
        "<h5 id='aboutSelfHelpGroup0301'>Self-Help Group</h5>"+
        "<p>&emsp;&emsp;Elango is an atheist. To be precise, he is more like a practitioner. He follows the spirit of Gandhi, Buddha, Swami Vivekananda, etc., but is not bound by religious forms, but establishes his own development philosophy and principles. Including the equal pay for equal work to achieve gender equality, create a dignified job opportunity for the villagers, and establish a Self-Help Group (SHG) autonomous organization to implement the concept through various projects.</p>" +
        "<p>&emsp;&emsp;</p>" +
        "<h5 id='aboutTheestablishmentoftheTVSG0302'>The establishment of the TVSG</h5>"+
        "<p>&emsp;&emsp;He believes that it is more important for villagers to have self-reliance than to receive financial assistance. The establishment of the 'Trust for village Self-governance' (TVSG) not only meets the needs of the people's microfinance, but also condenses the villagers. The village autonomy ideal embraced by Elango allows alternative development to be practiced and reflects the spirit of Gandhi. Below the TVSG, there are three institutes, Panchayat Academy, Health Center, Rural Technological and Innovative Center.</p>" +
        "<img src='/static/media/aboutDrElangowithagirl.efa5177c.jpg' alt=''/>"+
        "<h6>Dr. Elango with a girl</h6>"+
        "<p>&emsp;&emsp;</p>" +
        "<p>&emsp;&emsp;</p>" +
        "<p>&emsp;&emsp;</p>" +
        "<p>&emsp;&emsp;</p>" +
        "<p>&emsp;&emsp;</p>" +
        "<p>&emsp;&emsp;</p>"
      }
    ],
    "Philosophy&Practice": [
      {
        title: "About Panchayat",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: "555555555555555555555555555555555555555555555555555555"
      },
      {
        title: "Transformation of Kuthambakkam Village in two Decades",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "55554444444444444444444444455555555555555555555555555555555"
      },
      {
        title: "Education",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post:
          '<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>'
      },
      {
        title: "Energy",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "55554444444444444444444444455555555555555555555555555555555"
      }
    ],
    "Panchayat Academy": [
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
        post:
          '<h2 style={{fontSize:"5px"}}>易解：父母呼喚，應及時回答，不要慢吞吞的很久才應答父母有事交代，要立刻動身去做，不可拖延或推辭偷懶。父母教導我們做人處事的道理，是為了我們好， 應該恭敬的聆聽。做錯了事，父母責備教誡時，應當虛心接受，不可強詞奪理，使父母親生氣、傷心。</h2>'
      }
    ]
  },
  news: [
    //  "{新聞的照片(放在img裡的名稱) + 跳轉URL  + 介紹 "} *N個
    {
      img: "bear.jpg",
      url: "#50",
      date: "30-03-2019",
      title: "我是誰2",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      img: "imghightlight.jpg",
      url: "#60",
      date: "30-04-2019",
      title: "我是誰",
      text:
        "This card has supporting text below as a natural lead-in to additional content."
    },
    {
      img: "bear.jpg",
      url: "https://www.facebook.com/",
      date: "30-05-2019",
      title:
        "This card has supporting text below as a natural lead-in to additional content.",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
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
