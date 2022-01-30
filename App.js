import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import createStore from './store/index'
import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';


const {store, persistor} = createStore();

export default class App extends Component {


  

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <RootNavigator/>
            </SafeAreaProvider>              
          </PersistGate>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button :{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
    height: 40
  },

  containerButton: {
    position: 'relative',
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
}
});
