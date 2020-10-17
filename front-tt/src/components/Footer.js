import React from 'react'
import ReactPlayer from "react-player"

export function Footer({instrumental,notes }) {

    return (
        <li>        {notes}

        <ReactPlayer url={instrumental}/>
        </li>
    )
}
export default Footer