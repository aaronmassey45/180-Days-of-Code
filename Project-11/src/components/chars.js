import React, { Component } from 'react';

class Character extends Component {
  render() {
    let url = "https://en.wikipedia.org/w/index.php?title="+this.props.char.name+"&redirect=no";
    return (
      <div className="chars col-sm-6">
        <a href={url} target="_blank"><strong>{this.props.char.name}</strong></a>
      </div>
    );
  }
}
export default Character;
