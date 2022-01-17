import {compose, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export default (reducers) =>{

    const persistedReducer = persistReducer(persistConfig, reducers)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers());
    const persistor = persistStore(store);
    return {store, persistor};
}

