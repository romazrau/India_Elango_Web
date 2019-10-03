import React from 'react';

import './App.css';
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar"

import NewsCardGroup from "./containers/NewsCardGroup/NewsCardGroup"



import HomeCarousels from "./containers/HomeCarousels/HomeCarousels"
import Jumbo from "./containers/Jumbotron/Jumbotron"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <div className="App">

      <HeaderNavBar></HeaderNavBar>
      <Jumbo />
      <HomeCarousels></HomeCarousels>
      <NewsCardGroup></NewsCardGroup>
    </div>
  </BrowserRouter>
  );
}

export default App;
