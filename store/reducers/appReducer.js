import { INITIAL_STATE } from "../state/state";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'prova':
            return {
                ...state,
                state: state.state
            };

        default: 
            return state       
    }
    
}