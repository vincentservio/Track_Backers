import React from 'react'
import Counter from './Counter'
 function Tracks({ title, status, id }) {

    return (
        <li key={ id }>  
            <h2> { title } </h2>  
            <br/>
            { status }
            <Counter/>
        </li>
    )
}
export default Tracks