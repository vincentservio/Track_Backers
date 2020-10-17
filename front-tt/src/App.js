import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import Show from './components/Show'
import Home from './components/Home'
import TracksContainer from './container/TracksContainer'
import Nav from './components/Nav'
import TrackForm from "./container/TrackForm"
import ProgressContainter from './container/ProgressContainter';
import {Footer} from './components/Footer'
 class App extends Component {
  //  state = {
  //    pets: [],
  //    renderForm: true
  //  }
  // onView = (view) => {
  //     if(view === "list"){
  //       this.setState({
  //         renderForm: false
  //       })
  //     } else{
  //       this.setState({
  //       renderForm: true})
  //     }
  // }
  // componentDidMount(){
  //   this.props.getTracks()
  // }

  render() {
    
    // const tracks = this.props.tracks.map((track,i) => <li key={i}>{track.title}- {track.status}</li>)
    return (
<Router><Nav/>
      <div className="App">
          <header className="App-header">
       
                

                        {/* <Route path="/addtrack"exact component={Addtrack} />
                        <Route path="/tracks"exact component={Tracks} />
                        <Route path="/" exact component={Home}/> */}
                               <Switch>  
                                     
                        <Route exact path="/tracks/new"exact component={TrackForm} />
                        <Route exact path="/instrumentals"exact component={ProgressContainter} />
                        <Route exact path="/tracks"exact component={TracksContainer} />
                        <Route exact path="/" exact component={Home}/>
                 
        
              </Switch >
          
        </header> 
      </div>

</Router>
    )
  }
}

// const mapStateToProps = state => {

//   return{
//     tracks: state.trackReducer.tracks,

//     loading: state.trackReducer.loading
//   }
// }
// export default connect(mapStateToProps, {getTracks})(App);

export default App
