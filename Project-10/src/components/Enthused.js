import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText(' :) ');
    }, 150);
  }
  componentWillUnmount(prevProps, prevState) {
  clearInterval(this.interval);
}

  render() {
    return (
      <button className="btn btn-danger" onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}
