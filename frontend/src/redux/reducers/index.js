import { DELETE_ALL } from "../constants/action-types";
/*
articles: {
    "Navbar標題": [
      {
        title: "第一篇標題"",
        img: "背景圖.jpg",
        subtitleList: [
          { subtitle: "第一個小標", id: "a1b2c3" },
          { subtitle: "第二個小標", id: "a1b2c5" }
        ],
        post: 
        "<h5 id='a1b2c3'>第一個小標</h5>" +
        "<p>&emsp;&emsp;示範內文</p>"+
        "<p>&emsp;&emsp;</p>"+
        "<h5 id='a1b2c5'>第二個小標</h5>" +
        "<p>&emsp;&emsp;示範內文</p>"
      },
      {
        title: "第二篇標題",
        img: "imghightlight.jpg",
        subtitleList: [],
        post: "沒有內容"
      },
    ]
  }
*/

//articles文章格式:
//大標(title)會自己顯示，其他內容要用html格式儲存成文字寫在post下
//段落小標(subtitle))用<h5 id=" .. "> .. </h5>  ,id請勿重複並跟著subtitle設定
//文字內容每段用用 <p>&emsp;&emsp; .. </p>   (&emsp; 是空一個字元)
//下一個小標前塞一個 <p>&emsp;&emsp;</p>  維持整齊
//圖片:  <img src='/static/media/...' alt='T替代文字'>，先去別的頁面(RouteHome)<img src={require("../../img/圖片名.jpg")} alt="測試用圖片"/>，在瀏覽器內f12看src，再複製到這裡的src
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
          {
            subtitle: "Kuthambakkam Village",
            id: "aboutHisKuthambakkamVillage0202"
          },
          {
            subtitle: "Issues in the Village",
            id: "aboutIssuesintheVillage0203"
          }
        ],
        post:
          "<h5 id='aboutBackgroundofIndia0201'>Background of India</h5>" +
          "<p>&emsp;&emsp;Poverty is one of the greatest challenges facing human development and reducing poverty has always been an important goal of international organizations. Although since the 2000s global poverty rate reduced by half, but there are still many people living in extreme poverty, especially in China and India, two developing countries, the two combined sustainable, poverty reduction and the relationship between state power.</p>" +
          "<p>&emsp;&emsp;Since the Chinese economic reform in 1978, in the context of globalization, from the 1980s to 2010, 60% of the population under the extreme poverty line ($1.5) has been reduced. In contrast, India's economy is only half the size of China, and so far, only 20% of the poverty reduction target has been achieved. Even though the populations and territories of these two countries are similar, and the ethnic and regional cultures are quite complex, the differences in their political operations are markedly different - India is a democracy and China is an authoritarian state. This allows scholars tend to come to the discussion: authoritarian regimes may be a better solution to eliminate poverty, at least in terms of improving the income and promote economic process. However, China's way of reducing poverty is at the expense of social sustainability and environmental sustainability. In India, citizens gained the power to democratically elect their panchayat leader after 1996, which is the lowest administrative size in India. Political decentralization is a key different power mechanism difference between China and India.</p>" +
          "<p>&emsp;&emsp;This report is particularly concerned about the case of Kuthambakkam village, 30 km from Chennai, the capital of Tamil Nadu, India. The village was as poor as most rural villages in India but led by the village president Elango Rangaswamy. Over the past two decades, it has undergone dramatic transformation poverty (Raju and Dwivedula 2009). As an engineer, social reformer and politician, Elango is committed to creating jobs, improving infrastructure, protecting the environment and promoting capacity building for disadvantaged groups such as the poor, women and the elderly. To date, more than 80% of families in Kuthambakkam have escaped the poverty line, with an average household income of INR 15,000 (approximately US$ 210). There is still huge poverty and inequality in India, and 80% of households in many villages are in a state of extreme poverty, with household incomes below 5,000 rupees (United Nations High Level Political Forum, 2017). The case of Kuthambakkam is representative of India's poverty alleviation process and should receive more academic attention than it has until now.</p>" +
          "<img src='/static/media/aboutTheDistributionofPopulationNearChennaiArea.4db4c380.png' alt='' />" +
          "<h6>The Distribution of Population Near Chennai Area</h6>" +
          "<p>&emsp;&emsp;India is a rising country, but it also faces problems that need to be improved, such as poverty, regional inequality, environmental damage, countryside hollows out and gender equality have not been fully implemented. Although the country does not seem to be poor, the country faces the largest gap between the rich and the poor. In the 'Voluntary National Review (VNR)' report by the Indian government in response to the Sustainable Development Goals (SDGs), basic physiological needs such as poverty and hunger are still urgently needed to be improved.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutHisKuthambakkamVillage0202'>Kuthambakkam Village</h5>" +
          "<p>&emsp;&emsp;Kuthambakkam village, near Chennai, was directly affected by the expansion of urbanization. Elango was born as a low caste but became the first engineer and doctor of Kuthambakkam. In order to establish a vision of the village's sustainable economy and local self-government, he gave up his work and returned to his hometown to unite with the youth. Elango prevents large companies from entering the village and undermining social structures. At the same time, he introduced industrial technology improvement to drive rural production capacity and formulated a long-term development plan for the village to achieve his goal of promoting village sustainability.</p>" +
          "<img src='/static/media/aboutDrElangowithvillagers.0ac12199.jpg' alt=''>" +
          "<h6>Dr. Elango with villagers</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutIssuesintheVillage0203'>Issues in the Village</h5>" +
          "<p>&emsp;&emsp;During his tenure as panchayat leader, Elango to empower modes include mutual economic, network growth, social development, etc. to promote village autonomy. Participatory reforms have successfully addressed the deep problems of caste and gender inequality and have also improved the village economy by creating labor opportunities. The small factory built by Elango directly helped women and low-casting socially disadvantaged classes, raising the average income of households from 4,000 rupees to 20,000 rupees. For village development, poverty alleviation is only a phased goal. In the future, the goal of village cultivation will be self-sufficient, self-governing, and prosperous.</p>" +
          "<table><tbody>" +
          "<tr>" +
          "<td></td>" +
          "<td>Average number of employed persons per household</td>" +
          "<td>Average household size</td>" +
          "<td>Average per capita monthly income (Rp.)</td>" +
          "<td>Household monthly income at average (Rp.)</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Kuthambakkam</td>" +
          "<td>1.5</td>" +
          "<td>3.7</td>" +
          "<td>11,568 (165usd)</td>" +
          "<td>16,774</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Tamil Nadu urban</td>" +
          "<td>1.7</td>" +
          "<td>4.4</td>" +
          "<td>10,073 (139usd)</td>" +
          "<td>16,621</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Tamil Nadu rural</td>" +
          "<td>1.9</td>" +
          "<td>5.0</td>" +
          "<td>7,456 (106usd)</td>" +
          "<td>14,167</td>" +
          "</tr>" +
          "<tr>" +
          "<td>India</td>" +
          "<td>1.4</td>" +
          "<td>4.8</td>" +
          "<td>9,822 (135usd)</td>" +
          "<td>13,262</td>" +
          "</tr>" +
          "</tbody></table>" +
          "<h6>Household Income Table</h6>"
      },
      {
        title: "Trust for Village Self-governance",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "Self-Help Group", id: "aboutSelfHelpGroup0301" },
          {
            subtitle: "The establishment of the TVSG",
            id: "aboutTheestablishmentoftheTVSG0302"
          }
        ],
        post:
          "<h5 id='aboutSelfHelpGroup0301'>Self-Help Group</h5>" +
          "<p>&emsp;&emsp;Elango is an atheist. To be precise, he is more like a practitioner. He follows the spirit of Gandhi, Buddha, Swami Vivekananda, etc., but is not bound by religious forms, but establishes his own development philosophy and principles. Including the equal pay for equal work to achieve gender equality, create a dignified job opportunity for the villagers, and establish a Self-Help Group (SHG) autonomous organization to implement the concept through various projects.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='aboutTheestablishmentoftheTVSG0302'>The establishment of the TVSG</h5>" +
          "<p>&emsp;&emsp;He believes that it is more important for villagers to have self-reliance than to receive financial assistance. The establishment of the 'Trust for village Self-governance' (TVSG) not only meets the needs of the people's microfinance, but also condenses the villagers. The village autonomy ideal embraced by Elango allows alternative development to be practiced and reflects the spirit of Gandhi. Below the TVSG, there are three institutes, Panchayat Academy, Health Center, Rural Technological and Innovative Center.</p>" +
          "<img src='/static/media/aboutDrElangowithagirl.efa5177c.jpg' alt=''/>" +
          "<h6>Dr. Elango with a girl</h6>"
      }
    ],
    "Philosophy & Practice": [
      {
        title: "About Panchayat",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "What is Panchayat?", id: "PhilosophyPractice0101" },
          { subtitle: "The Symbol of Panchayat", id: "PhilosophyPractice0102" },
          {
            subtitle: "Regulation of the Election",
            id: "PhilosophyPractice0103"
          }
        ],
        post:
          "<h5 id='PhilosophyPractice0101'>What is Panchayat?</h5>" +
          "<p>&emsp;&emsp;what is panchayat? In simple words, panchayat is “Local government”. The top place is Central government, the second level is State Government and the local level is Panchayat (local government). However, there are three parts of panchayat, they separated to District, Block, and Gram panchayat. District panchayat (DP), we also can call it “District Council”; Block Panchayat (BP) is the administrative office; and Gram Panchayat (GP) is as known as village council. Therefore, BP govern the place, and is the bridge of voices between DP and GP.</p>" +
          "<img src='/static/media/PhilosophyPracticeTheStructureofIndianLocalGovernment.fbe35dd9.jpg' alt='' />" +
          "<h6>The Structure of Indian Local Government</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0102'>The Symbol of Panchayat</h5>" +
          "<p>&emsp;&emsp;The Symbol of Panchayat are crows, because of their group and self-help behavior. Especially, Dr. Elango said we should learn from crows, they are each crow was an individual, independent body, but when they found foods they would share to its friends, family, groups, and society. so does the panchayat academy.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0103'>Regulation of the Election</h5>" +
          "<p>&emsp;&emsp;What’s more, in the democracy other than the panchayat the process is ‘We Vote - You Govern’ or ‘We Vote - They Govern’ and in the panchayats, it is ‘We Vote - We Govern’ because people are directly participating. For the social equality, there is a regulation for election. Rotated change the limitation of the candidates which is scheduled caste and gender every ten years.</p>" +
          "<img src='/static/media/PhilosophyPracticeTheRotationoftheScheduledCasteandGender.bf99bf7e.jpg' alt='' />" +
          "<h6>The Rotation of the Scheduled Caste and Gender</h6>" +
          "<p>&emsp;&emsp;In general, the regulation of election should be held in every 5 years, but there is some problem of election this year, and it was postponed. Therefore, The Panchayat are going to breakdown. In this case, it made the people rethink about the finance and some parts could not all rely on the state government, they should be “Local Self Government” to maintain the government working.</p>"
      },
      {
        title: "Transformation of Kuthambakkam Village in two Decades",
        img: "imghightlight.jpg",
        subtitleList: [
          { subtitle: "Infrastructure", id: "PhilosophyPractice0201" },
          {
            subtitle: "Social and Gender Equality",
            id: "PhilosophyPractice0202"
          },
          { subtitle: "Education", id: "PhilosophyPractice0203" },
          { subtitle: "Energy", id: "PhilosophyPractice0204" }
        ],
        post:
          "<h5 id='PhilosophyPractice0201'>Infrastructure</h5>" +
          "<p>&emsp;&emsp;Roads are the key infrastructure that determines village development. Not only are resources more accessible to villages, but villagers are also more likely to access resources. Under the supervision of Elango, road quality is still very good even after 20 years. In line with road safety, he also designed solar streetlights to give the village a safe and environmentally friendly night environment. The solar streetlight assembly includes a lamp cover, a light bulb, and a lamp holder, all of which are produced at technology factories by residents who hired by Elango. Kuthambakkam used to have flooding problems, so Elango also assembled villagers to build a drainage ditch to solve the flood troubles. In addition, he actively cooperated with local government policies to build public toilets in villages and to promote health education to improve the public health conditions in Kuthambakkam.</p>" +
          "<p>&emsp;&emsp;In order to improve the quality of living, he assisted the villagers to use the ecological bricks produced in the technology factory to transform the straw houses into brick houses, so that the villagers lived with dignity and safety. The establishment of the water resources system has also improved the basic needs of life. Elango has built several large water towers and installed several pumping motors in each hamlet of the village to provide water for the households.</p>" +
          "<img src='/static/media/PhilosophyPracticeTheConcreteBricks.9c3cf154.jpg' alt='' />" +
          "<h6>The Concrete Bricks (made in village factory)</h6>" +
          "<img src='/static/media/PhilosophyPracticeToilet.36af85c3.jpg' alt='' />" +
          "<h6>Toilet</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0202'>Social and Gender Equality</h5>" +
          "<p>&emsp;&emsp;There are still many inequalities in modern Indian society. Whether it is class inequality or other aspects of gender inequality, it is deeply affected by the ideas left by traditional ancient India.</p>" +
          "<p>&emsp;&emsp;Elango is committed to solving the problem of social inequality, he adopted the residence policy of Twin House, the concept of Samathuvapuram (Equality Village), which broke the caste class and allowed each other to maintain a friendly relationship. In the Twin house, a house is divided into half, one of which is home to non-dalit residents, the other side is a resident of Dalit, and residents of different castes live together under the same roof. Although the two sides are residents of different classes, their economic situation is equally poor. Therefore, getting rid of poverty is their common goal, so that they can cooperate with each other and understand each other, and eliminate the barriers and conflicts between different class castes.</p>" +
          "<p>&emsp;&emsp;Gender inequality is also one of the common problems in past villages. Elango starts from the institutional level, eliminates gender differences through equal pay for equal work, and provides legal counseling services for women suffering from domestic violence. Women's participation in autonomous organizations (SHG) not only provides multiple opinions but also plays a role in improving the socioeconomic status of rural women.</p>" +
          "<img src='/static/media/PhilosophyPracticeWomaninFactory.0cd1d493.jpg' alt='' />" +
          "<h6>Woman in Factory</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0203'>Education</h5>" +
          "<p>&emsp;&emsp;Elango is also committed to promoting education. Nearly two-thirds of the Indian education system graduated from the background of science and technology. One of the main reasons is that the poor can plug in the IT industry to get rid of poverty and reverse the social class in the past. However, in the 1990s, for villages like Kuthambakkam, many poor families made it a huge burden for children to go to school, not to mention extra-educational outside formal education. Elango's efforts led Kuthambakkam to set up the E-Learning Center. The E-Learning Center to provide the way for the poor to pursue their own education. Since Elango began serving as the village head and established the E-Learning Center in 1996, these efforts have been successful (Table 2). Through the computer and the Internet, it serves as a bridge for students to communicate with the outside world. Among them, the E-Learning Center strongly promotes two major points of child education and farmers' training:</p>" +
          "<ol>" +
          "<li>For children eager to continue their studies, the E-Learning Center's computer classroom is an important resource for developing information skills and knowledge in the nearest village before accepting higher education. Elango's concept of gender equality also gives girls and girls more opportunities to step out of their homes and receive science and technology education.</li>" +
          "<li>The E-Learning Center provides an interactive exchange area for villagers who have passed the age of study. The computer courses offered by the center allow most villagers who live in agriculture to obtain professional information from the Internet and improve agricultural output.</li>" +
          "</ol>" +
          "<img src='/static/media/PhilosophyPracticePanchayatElementarySchool.7d83e765.jpg' alt='' />" +
          "<h6>Panchayat Elementary School</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0204'>Energy</h5>" +
          "<p>&emsp;&emsp;In the current development process, the environment may be sacrificed for the development of a region or the process of protecting the environment. However, Kuthambakkam's energy strategy and environmental development strategy are parallel. In the process of village development, there is still persistence in environmental protection. In order to maintain the basic needs of the village's households, he set up a technology factory to perform the following production and R&D in the factory and ensure that the items produced are low-energy and environmentally friendly.</p>" +
          "<ol>" +
          "<li>Hollow brick production changed from traditional firing method to pressure forming</li>" +
          "<li>Improve the traditional power-saving bulb into LED, and the power consumed is reduced from 40W to 9W</li>" +
          "<li>The electric fan was changed from the original AC fan to the DC fan, and the power consumption was reduced from 73W to 18W.</li>" +
          "<li>Construction of the solar power supply system.</li>" +
          "</ol>" +
          "<img src='/static/media/PhilosophyPracticeDrElangowithSolarPanels.e08604e3.jpg' alt='' />" +
          "<h6>Dr. Elango with Solar Panels</h6>"
      },
      {
        title: "Sustainable Economic Zone",
        img: "BlockTrustSG.jpg",
        subtitleList: [
          { subtitle: "Sustainable Concept", id: "PhilosophyPractice0301" },
          { subtitle: "Self-sufficiency", id: "PhilosophyPractice0302" },
          { subtitle: "The Village Industries", id: "PhilosophyPractice0303" }
        ],
        post:
          "<h5 id='PhilosophyPractice0301'>Sustainable Concept</h5>" +
          "<p>&emsp;&emsp;“Making any country strong, and its people to live with dignity is not easy. But it is possible by energizing the innate abilities of the people to utilize the local resources, their skills, to get back their self-esteem and dignity.”</p>" +
          "<p>&emsp;&emsp;How you make rural area to have economic growth? The answer will be the “Network Economy”. Basically, each village provides some goods, trading with near villages. In this way, lots of people can get some the opportunities for work and do small businesses. Then, the trading network between villages become stronger, the total amount of the economic benefits will be improved. It can be a sustainable Economic Zone.</p>" +
          "<img src='/static/media/PhilosophyPracticeSustainableEconomicNetwork.f12ec4d4.jpg' alt='' />" +
          "<h6>Sustainable Economic Network</h6>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0302'>Self-sufficiency</h5>" +
          "<p>&emsp;&emsp;In order to achieve self-sufficiency in the development of village agriculture, Elango established Farmer's Club. Elango and the farmers jointly raised funds and accumulate credit lines to increase the loan quota, so that farmers with low incomes can get loans.</p>" +
          "<p>&emsp;&emsp;Further, he purchased machinery for agricultural processing and food processing and signed affordable leases with farmers to enable farmers to use machines for processing to increase production efficiency. For example, Rice mill machine (which can process 8 metric tons per day) can produce rice and dal for daily consumption; while coconut oil press machine or other types of oil presses machine can produce edible oil or process into soap. These agricultural products will give priority to the needs of the villagers’ households. Additional products can supply the needs of the village or neighboring villages at below market prices, and even sell to the city, earning more income for farmers and creating additional value.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<h5 id='PhilosophyPractice0303'>The Village Industries</h5>" +
          "<table><tbody>" +
          "<tr>" +
          "<th>Type</th>" +
          "<th>Items</th>" +
          "</tr>" +
          "<tr>" +
          "<th>Food</th>" +
          "<td><ol>" +
          "<li>Rice mills</li>" +
          "<li>Paddy processing units</li>" +
          "<li>Tur Dal (Yellow pulses) mill</li>" +
          "<li>Oil mill</li>" +
          "<li>Bakery items</li>" +
          "<li>Confectionery products</li>" +
          "<li>Flour mill</li>" +
          "<li>Miscellaneous items. (e.g. Pickles, papad, masalas etc.)</li>" +
          "<li>Milk processing</li>" +
          "<li>Tea packaging / coffee processing</li>" +
          "<li>Iodized Salt</li>" +
          "<li>Vegetables</li>" +
          "</ol></td>" +
          "</tr>" +
          "<tr>" +
          "<th>Construction materials</th>" +
          "<td><ol>" +
          "<li>Brick manufacturing units (VSBK)</li>" +
          "<li>Painting materials</li>" +
          "<li>Plastic recycling units for production of road repairing materials</li>" +
          "<li>Tiles</li>" +
          "<li>Mud Blocks</li>" +
          "<li>Precast materials/ cement water tanksMud Blocks</li>" +
          "</tr>" +
          "<tr>" +
          "<th>Cosmetic & Toilet items</th>" +
          "<td><ol>" +
          "<li>Bathing Soaps</li>" +
          "<li>Washing Soaps/ Detergent</li>" +
          "<li>Toothpaste/ Tooth powder</li>" +
          "<li>Shampoo/ Shaving cream</li>" +
          "<li>Hair oils</li>" +
          "</ol></td>" +
          "</tr>" +
          "<tr>" +
          "<th>Other items</th>" +
          "<td><ol>" +
          "<li>Tailoring</li>" +
          "<li>Cloth processing e.g. pillow covers, bed sheets etc.</li>" +
          "<li>Candles, Incense</li>" +
          "<li>Paper recycling units</li>" +
          "<li>Cattle feed</li>" +
          "<li>Electrical gadget</li>" +
          "<li>School Notebooks</li>" +
          "<li>School bags/ shopping bags</li>" +
          "<li>Compost from waste organic</li>" +
          "<li>Food Processing (Jams, squash etc.)</li>" +
          "<li>Furniture, carpenter</li>" +
          "<li>Ornaments (Silver & gold)</li>" +
          "<li>Utensils</li>" +
          "<li>Plastic products</li>" +
          "<li>Plastic recycling</li>" +
          "<li>Battery Production units</li>" +
          "</ol></td>" +
          "</tr>" +
          "<tr>" +
          "<th>Service Industries</th>" +
          "<td><ol>" +
          "<li>Transport operators for raw / finish goods</li>" +
          "<li>Electric repairs</li>" +
          "<li>Auto repairs</li>" +
          "<li>Taxi services</li>" +
          "<li>Internet café/STD shop</li>" +
          "<li>Trading shops (3 per village)</li>" +
          "</ol></td>" +
          "</tr>" +
          "</tbody></table>"
      }
    ],
    "Panchayat Academy": [
      {
        title: "Panchayat Academy",
        img: "BlockAboutElango.jpg",
        subtitleList: [
          { subtitle: "Introduction", id: "PanchayatAcademy0101" }
        ],
        post:
          "<h5 id='PanchayatAcademy0101'>Introduction</h5>"+
          "<p>&emsp;&emsp;By making Kuthambakkam a model panchayat, it became a learning centre for other panchayats. In this way 25 – 30 panchayat presidents from other villages have been trained every month in the panchayat academy. The training covers the developmental model of Kuthambakkam, hands on working with the ongoing projects, rights and duties of the panchayats, constitutional powers and commitments, 29 subjects given for panchayats, planning at the panchayat level, disaster management training, rural industries and knowledge on local bodies in other countries. Likewise, trainings are given for the youth leaders and women leaders.</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" 
      },
      {
        title: "Coming soon",
        img: "imghightlight.jpg",
        subtitleList: [],
        post:
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>" +
          "<p>&emsp;&emsp;</p>"
      }
    ]
  },
  news: [
    //  "{新聞的照片(放在img裡的名稱) + 跳轉URL  + 日期 + 標題 + 介紹 "} *N個
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
