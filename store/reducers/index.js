import {combineReducers} from 'redux';
import appReducer from '../reducers/appReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
    appReducer : appReducer,
    userReducer : userReducer
});

export default rootReducer;