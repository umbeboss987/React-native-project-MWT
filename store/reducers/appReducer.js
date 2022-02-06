import { INITIAL_STATE } from "../state/state";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload
            }
         case 'LOAD_GENERES_SUCCESS':
            return {
            ...state,
            generes: action.payload
        };
        case 'LOAD_NEW_RELEASES_SUCCESS':
            return {
            ...state,
            newReleases: action.payload
        };
        case 'LOAD_NEW_PLAYLIST_SUCCESS':
            return {
            ...state,
            newPlaylist: action.payload
        };
        case 'LOAD_SINGLE_CATEGORIES_SUCCESS':
            return {
            ...state,
            singleCategory: action.payload
        };
        default:
            return state
    }

}