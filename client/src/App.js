import React, { Component } from 'react';
import Header from './components/Header.js'
import Saved from './components/Saved.js'
import Search from './components/Search.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Saved />
      </div>
    );
  }
}

export default App;
