import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import Home from './components/Home'
import TracksContainer from './container/TracksContainer'
import Nav from './components/Nav'
import TrackForm from "./container/TrackForm"
import ProgressContainter from './container/ProgressContainter';
 class App extends Component {

  render() {
    return (
      <Router>
        <Nav/>
        <div className="App">             
          <Switch>          
            <Route exact path="/tracks/new"exact component={TrackForm} />                 
            <Route exact path="/instrumentals"exact component={ProgressContainter} />
            <Route exact path="/tracks"exact component={TracksContainer} />
            <Route exact path="/" exact component={Home}/>
          </Switch >
        </div>
      </Router>
    )
  }
}
export default App
