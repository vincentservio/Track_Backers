import React from 'react'

 function Tracks({title, status, id}) {

    return (
        <li key={id}>  
            <h2> {title} </h2>  
            <br/>
            {status}
        </li>
    )
}
export default Tracks
/* <table>
                  <tbody>
                      <tr>
                    <th style={{ color: 'green' }}>Completed</th>
                    <th style={ thStyle}>Written But Not Recorded</th>
                    <th style={ thStyle}>Partialy Written And Recorded</th>
                    <th style={ thStyle}>Lyrics No Instrumental</th>
                    <th style={ thStyle}>Instrumental No Lyrics</th>
                    </tr> 
                 </tbody> 
                 <tbody>
                    <tr>
                        <td>{complete}</td>
                        <td>{tracks}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody> 
             </table> */