import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Markdown from './components/markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Markdown />
      </div>
    );
  }
}

export default App;
