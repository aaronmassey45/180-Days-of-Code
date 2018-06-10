import React, { Component } from 'react';
import { SearchComponent } from '../components/searchComponent';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {num: 1};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let rand = Math.floor((Math.random() * 9) + 1)
    this.setState({num: rand});
  }

  render() {
    return (
      <div className="Search container">
        <button type="button" onClick={this.handleClick} className="btn btn-sw btn-lg"><i className="fa fa-random" aria-hidden="true"></i> Get New Character Set!</button>
        <SearchComponent className="text-center" num={this.state.num}/>
      </div>
    );
  }
}
