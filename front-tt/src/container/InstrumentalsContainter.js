import React, { Component } from 'react'
import  Instrumentals  from '../components/Instrumentals'
import {connect} from 'react-redux'
import { getTracks } from '../actions/tracks'
import Loading from '../components/Loading'
class InstrumentalsContainer extends Component {
  componentDidMount(){
  this.props.getTracks()
  }

  render() {     
    const instrumentals = this.props.instrumental.map((links, i)  => 
      <Instrumentals 
        key={ i } 
        instrumental={ links.instrumental } 
        notes={ links.notes} 
        link={ links }
        title={ this.props.track.find(title => title.id === links.track_id  ).title }
      />
    )

    return (
      <>
        <ul>{ this.props.loading ?  <Loading/>: instrumentals }</ul>
      </>
    )
  }  
}

const mapStateToProps = (state) => {
  return{
    track: state.trackReducer.tracks.map(track => track),
    instrumental: state.trackReducer.tracks.map(track => track.links[0]),
  }
}

export default connect(mapStateToProps, {getTracks})(InstrumentalsContainer);


