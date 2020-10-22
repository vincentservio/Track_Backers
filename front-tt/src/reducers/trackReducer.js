
export default (state= {tracks: [], loading: false }, action) => {
    switch(action.type){
        case "LOADING_TRACKS":
            return {
                ...state,
                loading: true
            }

        case "TRACKS_LOADED":
            return {
                ...state,     
                tracks: action.payload,
                loading: false
            }

        case "ADDING_TRACK":  
            return{        
                ...state,
                loading: true
            }
        case "TRACK_ADDED":
            return{      
                ...state,
                tracks:[...state.tracks, action.payload],
                loading: false
            }
        default:
        return state
    }
}
