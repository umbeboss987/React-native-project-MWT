import { INITIAL_STATE } from "../state/state";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return {
                ...state,
                loadingCategories:true,
            }
        case 'LOAD_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                loadingCategories:false,
            }
        case 'LOAD_GENERES':
                return {
                ...state,
                loadingGeneres: true
        };
         case 'LOAD_GENERES_SUCCESS':
            return {
            ...state,
            generes: action.payload,
            loadingGeneres: false
        };
        case 'LOAD_NEW_RELEASES':
            return {
            ...state,
            loadingNewReleases: true
        };
        case 'LOAD_NEW_RELEASES_SUCCESS':
            return {
            ...state,
            newReleases: action.payload,
            loadingNewReleases: false
        };
        case 'LOAD_NEW_PLAYLIST':
            return {
            ...state,
            loadingNewPlaylist: true
        };
        case 'LOAD_NEW_PLAYLIST_SUCCESS':
            return {
            ...state,
            newPlaylist: action.payload,
            loadingNewPlaylist: false
        };
        case 'LOAD_SINGLE_CATEGORIES':
            return {
            ...state,
            loadingSingleCategory: true
        };
        case 'LOAD_SINGLE_CATEGORIES_SUCCESS':
            return {
            ...state,
            loadingSingleCategory: false,
            singleCategory: action.payload
        };
        case 'LOAD_SEARCH_SUCCESS':
           let albums = action.payload.albums.items;
           let songs = action.payload.tracks.items;
           Array.prototype.push.apply(albums, songs)
            return {
            ...state,
            search: albums
        };
     
        default:
            return state
    }

}