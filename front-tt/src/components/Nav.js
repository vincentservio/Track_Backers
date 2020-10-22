import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../index.css';

export default class Nav extends Component {
    render() {
        return (
            <div>    
                <img src="https://cdn1.bbcode0.com/uploads/2020/10/13/15e405f2e73def6f4414364b587bec66-full.png" className="App-logo" alt="logo" />
                <center>
                    <Link to="/">HOME </Link> 
                    <Link to="/tracks/new" >Addtrack </Link> 
                    
                    <Link to="/tracks" >Tracks </Link> 
                    <Link to="/instrumentals" >Instrumentals </Link> 
                </center> 
            </div>
        )
    }
}
