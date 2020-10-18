import React from 'react'
import ReactPlayer from "react-player"

export function Footer({instrumental,notes , link}) {
debugger
    return (
        <div>      
            <ReactPlayer url={instrumental}/><div className="myBox"> {notes}</div> 
        </div>    
    )
}
export default Footer



