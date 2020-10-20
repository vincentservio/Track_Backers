import React, { Component } from 'react'
import ReactPlayer from "react-player"

// export function Footer({instrumental,notes , link, handleonClick}) {





 class Footer extends Component {
     state = {
         show: true,
         note: "" 
     }
    handleClick = () => {

        this.setState({
                  show: !this.state.show,
                  note: this.props.link.notes
        }) 
       
     }
     
    render() {
    //   className="myBox"
        //   debugger
        return (
            <div>               
                 <ReactPlayer className="p" url={this.props.instrumental}/>

                  <button onClick={this.handleClick}>Notes</button>
                { this.state.show ? "" : <p className="myBox">{this.state.note }</p>}

            </div>       
        )
    }
}
export default Footer


