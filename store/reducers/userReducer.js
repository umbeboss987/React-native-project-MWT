import { USER_STATE } from "../state/userState";

export default function (state = USER_STATE, action) {
    switch (action.type) {
        case 'LOAD_USER_PLAYLIST_SUCCESS':
            return {
                ...state,
                playlists: action.payload
            }
        default:
            return state
    }

}