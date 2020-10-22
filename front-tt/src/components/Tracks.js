import React from 'react'

 function Tracks({ title, status, id }) {

    return (
        <li key={ id }>  
            <h2> { title } </h2>  
            <br/>
            { status }
        </li>
    )
}
export default Tracks