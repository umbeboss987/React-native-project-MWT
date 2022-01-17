import {combineReducers} from 'redux';
import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
    appReducer : appReducer
});

export default rootReducer;