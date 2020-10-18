import React, { Component } from 'react'
import { Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to TrackBackers</h1>
                <h3>Begin by clicking below to add track:</h3>
                 <center><Link to="/tracks/new" > 
                 <img src='https://www.howtogeek.com/wp-content/uploads/2018/11/shutterstock_507995524.png.pagespeed.ce.ifoQScY1f_.png'  className="home-icon" alt="logo" /> </Link> </center>
            </div>
        )
    }
}
