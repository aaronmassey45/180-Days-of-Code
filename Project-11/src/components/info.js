import React, { Component } from 'react';
import Character from './chars';

export class Info extends Component {
  render() {
    let chars;
    if (this.props.info) {
      chars=this.props.info.map(char=> {
        return (
          <Character key={char.name} char={char} />
        );
      });
    }
    return (
      <div className="Info">
        {chars}
      </div>
    );
  }
}
