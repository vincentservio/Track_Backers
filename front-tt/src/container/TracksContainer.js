import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getTracks } from '../actions/tracks'
import Tracks from '../components/Tracks';
import Loading from '../components/Loading'
class TracksContainer extends Component {
  componentDidMount(){
    this.props.getTracks()
  }
  render() {
    const tracks = this.props.tracks.map((track, i)  => 
      <Tracks  key={i} title={track.title}  status={track.status} id={track.id} />
    )
    return (
      <div>
        <h1>TrackList</h1>
        <ul>
            {this.props.loading ?  <Loading/>: tracks }
        </ul>
      </div>
    )
  }  
}
const mapStateToProps = state => {
  return{
    tracks: state.trackReducer.tracks,
    loading: state.trackReducer.loading
  }
}
export default connect(mapStateToProps, {getTracks})(TracksContainer);
