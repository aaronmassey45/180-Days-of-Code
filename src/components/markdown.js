import React, { Component } from 'react';
import marked from 'react-marked/marked';

export default class Markdown extends Component {
  constructor(){
      super();
      this.state = {
        value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    var markup = marked(this.state.value);
    return (
      <div className="container row">
        <div className="col-sm-6">
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </div>
        <div className="col-sm-6">
          {markup}
        </div>
      </div>
    );
  }
}
