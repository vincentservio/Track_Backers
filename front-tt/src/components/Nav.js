import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../index.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        {/* <img
          src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-music-notes-icon-png-image_925660.jpg"
          className="App-logo"
          alt="logo"
        /> */}
        <center>
          <Link to="/">Home </Link>
          <Link to="/tracks/new">Addtrack </Link>

          <Link to="/tracks">Tracks </Link>
          <Link to="/instrumentals">Instrumentals </Link>
        </center>
      </div>
    );
  }
}
