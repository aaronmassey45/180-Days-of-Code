import React, { Component } from 'react';
import $ from 'jquery';
import { Info } from './info';

export class SearchComponent extends Component {
  constructor(props) {
     super(props);

     this.state = {
       info: []
     };
  }

  componentDidUpdate() {
    this.Info();
  }

  Info() {
    $.ajax({
      url: 'https://swapi.co/api/people/?page='+this.props.num,
      dataType: 'json',
      success: function(data) {
        this.setState({info: data.results});
      }.bind(this)
    });
    return;
 }

  render() {
    return (
      <div className="SearchComponent container">
        <Info info={this.state.info} />
      </div>
    );
  }
}
