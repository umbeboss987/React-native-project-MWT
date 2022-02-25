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
            playlists: [...state.playlists,action.payload]
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
        default:
            return state
    }

}