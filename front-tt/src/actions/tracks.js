
export const getTracks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TRACKS'})
        return fetch('http://localhost:3001/tracks')
        .then(res => res.json())
        .then(tracks => dispatch({type: "TRACKS_LOADED", payload: tracks}) )
    }
}
export const addTrack = (track) => {

    return (dispatch) => { 
 
    console.log(track)
        dispatch({type: "ADDING_TRACK"})
       fetch('http://localhost:3001/tracks', {
            method: "POST",
            body: JSON.stringify(track),
            headers: {
                'Content-Type': 'application/json'
            }                                                                          
        })                  
    .then(res  => res.json()) 
    .then(track => dispatch({type:"TRACK_ADDED", payload: track}))
} 
}