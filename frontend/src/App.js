import React from 'react';

import './App.css';
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar"
// import HomeCarousels from "./containers/HomeCarousels/HomeCarousels"
import NewsCardGroup from "./containers/NewsCardGroup/NewsCardGroup"


function App() {
  return (
    <div className="App">
      <HeaderNavBar></HeaderNavBar>  
      {/* <HomeCarousels></HomeCarousels> //有warning*/}
      <NewsCardGroup></NewsCardGroup>
    </div>
  );
}

export default App;
