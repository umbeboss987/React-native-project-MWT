import reducers from './reducers';
import configureStore from './CreateStore';


export default function(){
    return configureStore (reducers)
}