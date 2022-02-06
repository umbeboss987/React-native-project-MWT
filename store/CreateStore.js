import {compose, createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export default (reducers) =>{
    const middleware = [thunk];
    const enhancers = [applyMiddleware(...middleware)];
    const persistedReducer = persistReducer(persistConfig, reducers)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers(...enhancers));
    const persistor = persistStore(store);
    return {store, persistor};
}

