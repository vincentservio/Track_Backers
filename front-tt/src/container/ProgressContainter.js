import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import {connect} from 'react-redux'
import { getTracks } from '../actions/tracks'
class ProgressContainter extends Component {
    // Complete = COM
    // Written But Not Recorded = WBNR
    // Partialy Written Not Recorded = PWNR
    // Lyrics No Beat= LNB
    // Beat No Lyrics =BNL

    state = {
       instrumental:"",
       notes:""
    }

    componentDidMount(){
    this.props.getTracks()
  }



     render() {
        
    const instrumentals = this.props.instrumental.map((links, i)  => 
      <Footer  key={i} instrumental={links.instrumental}  notes={links.notes} id={links.id} />
    )


        return (
 
            <div>
             {/* {tracks} */}
             <ul>{instrumentals}</ul>
            </div>
        )
    }

   
}
 const mapStateToProps = (state, props) => {

  return{

    instrumental: state.trackReducer.tracks.map(track => track.links[0])
  }
}




export default connect(mapStateToProps, {getTracks})(ProgressContainter);


