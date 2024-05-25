import React from 'react';

import { Footer, Blog, Possibility, Feature, WhatGpt3, Header } from './containers';
import { Cta, Brand,Features, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div classNamej='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      <Brand />
      <WhatGpt3/>
      <Features/>
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

          
    </div>
  )
}
export default App;