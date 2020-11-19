import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import TracksContainer from './container/TracksContainer'
import Nav from './components/Nav'
import TrackForm from "./container/TrackForm"
import InstrumentalsContainer from './container/InstrumentalsContainter';
import Footer from "./components/Footer"
 class App extends Component {

  render() {
    return (
      <Router>
        <Nav/>
        <div className="App">             
          <Switch>          
            <Route path="/tracks/new" exact component={ TrackForm } />                 
            <Route path="/instrumentals" exact component={ InstrumentalsContainer } />
            <Route path="/tracks" exact component={ TracksContainer } />
            <Route path="/" exact component={ Home }/>
          </Switch >
        </div>
        <Footer/>
      </Router>
    )
  }
}
export default App
