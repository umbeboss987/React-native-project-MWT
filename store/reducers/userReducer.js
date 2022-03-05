import { USER_STATE } from "../state/userState";

export default function (state = USER_STATE, action) {
    switch (action.type) {
        case 'LOAD_USER_PLAYLIST_SUCCESS':
            return {
                ...state,
                playlists: action.payload
            }
         case 'SAVE_TRACK_SUCCESS':          
            return {
            ...state,
            library: [...state.library,action.payload]
        };
        case 'GET_USER_PROFILE':          
            return {
            ...state,
            loadingData: true,
            data: action.payload
        };
        case 'GET_USER_PROFILE_SUCCESS':          
            return {
            ...state,
            loadingData: true,
            data: action.payload
        };
        case 'DELETE_SONG_SUCCESS':        
        const newState = state.library.filter((item)=>{
            return item.id != action.payload.id
        })  
        return {
        ...state,
        library: newState
        };
        case 'GET_SINGLE_PLAYLIST_SUCCESS':          
        return {
        ...state,
        playlists: action.payload.data.items
        };

        case 'DELETE_TRACK_PLAYLIST_SUCCESS':        
        const change = state.playlists.filter((item)=>{
            return item.track.uri != action.payload;
        })  
        return {
        ...state,
        playlists: change
        };
        case 'ADD_TRACK_PLAYLIST_SUCCESS':
            return {
            ...state
        };
        default:
            return state
    }

}