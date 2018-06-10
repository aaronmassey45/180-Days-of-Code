import React, { Component } from 'react';
import { Navbar } from './navbar';
import { Title } from './containers/title';
import { Search } from './containers/search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Title/>
        <Search/>
      </div>
    );
  }
}

export default App;
