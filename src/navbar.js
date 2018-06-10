import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle btn btn-info"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                Menu <i className="fa fa-bars" aria-hidden="true" />
              </button>
              <a className="navbar-brand" href="https://aaronmassey.pro/">
                The Aaron Massey Project
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="https://medium.com/@aaronmassey45">Blog</a>
                </li>
                <li>
                  <a href="https://github.com/aaronmassey45">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
