import React, { Component } from 'react';
import marked from 'marked';
import Navbar from './navbar';
import placeholder from './placeholder';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a target='_blank' href="${href}">${text}</a>`;
};

const markedOptions = {
  renderer,
  breaks: true,
  tables: true,
};

class App extends Component {
  state = {
    value: placeholder,
  };

  componentDidMount() {
    window.marked = marked;
  }

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
            <textarea
              id="editor"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div
            id="preview"
            className="col-sm-6"
            dangerouslySetInnerHTML={{
              __html: marked(this.state.value, markedOptions),
            }}
            style={{ height: '80vh', overflowY: 'scroll' }}
          />
        </div>
      </div>
    );
  }
}

export default App;
