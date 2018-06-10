import React, { Component } from 'react';
import Hero from './Hero';
import Products from './Products';
import WhatWeDo from './WhatWeDo';
import Resources from './Resources';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Products />
        <WhatWeDo />
        <Resources />
      </div>
    );
  }
}

export default Home;
