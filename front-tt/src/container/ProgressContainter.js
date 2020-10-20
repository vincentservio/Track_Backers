import React, { Component } from 'react'
import  Footer  from '../components/Footer'
import {connect} from 'react-redux'
import { getTracks } from '../actions/tracks'
class ProgressContainter extends Component {
  componentDidMount(){
  this.props.getTracks()
  }


  render() {
      
    const instrumentals = this.props.instrumental.map((links, i)  => 
      <Footer  key={i} instrumental={links.instrumental}  notes={links.notes} id={links.id} link={links} handleonClick={this.handleClick}/>
    )
      return (
          <>
            {/* {tracks} */}
            <ul>{instrumentals}</ul>
          </>
      )
  }  
}
 const mapStateToProps = (state) => {
  return{
    // track: state.trackReducer.tracks.map(track => track),
    instrumental: state.trackReducer.tracks.map(track => track.links[0])
  }
}




export default connect(mapStateToProps, {getTracks})(ProgressContainter);


