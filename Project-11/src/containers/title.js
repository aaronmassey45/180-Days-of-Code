import React, { Component } from 'react';
import logo from './logo.png'

export class Title extends Component {
  render() {
    let first = "This is the page you're looking for!";
    return (
      <div className="Title container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{first}</h1>
        <h2>Star Wars character info using SWAPI and Wikipedia!</h2>
      </div>
    );
  }
}
