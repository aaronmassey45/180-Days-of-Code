import './App.css';
import React, { Component } from 'react';
import marked from 'marked';
import Navbar from './navbar';

class App extends Component {
  state = {
    value:
      'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://www.freecodecamp.org/hermanfassett)*',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div
          className="container row"
          style={{ marginRight: 'auto', marginLeft: 'auto' }}
        >
          <div className="col-sm-6">
            <textarea value={this.state.value} onChange={this.handleChange} />
          </div>
          <div
            className="col-sm-6"
            dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
