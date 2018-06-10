import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route exact path="/" component={Home}/>
          <Route path="/profile/:id" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
