import React from 'react';

import './App.css';
import HeaderNavBar from "./containers/HeaderNavBar/HeaderNavBar"
import HomeCarousels from "./containers/HomeCarousels/HomeCarousels"

function App() {
  return (
    <div className="App">
      <HeaderNavBar></HeaderNavBar>
      <HomeCarousels></HomeCarousels>

    </div>
  );
}

export default App;
