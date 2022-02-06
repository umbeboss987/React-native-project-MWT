import { INITIAL_STATE } from "../state/state";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload
            }

        case 'GET_USERS':
            return {
                ...state,
                state: action.payload
            };
         case 'LOAD_GENERES_SUCCESS':
            return {
            ...state,
            generes: action.payload
        };
        case 'LOAD_ALBUMS_SUCCESS':
            return {
            ...state,
            albums: action.payload
        };
    

        default:
            return state
    }

}