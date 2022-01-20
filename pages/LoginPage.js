import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {sProva} from '../store/selectors/appSelectors';
import {prova} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';

class LoginPage extends Component{

  render(){
    return(  
        <ImageBackground source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.image}>
        </ImageBackground>
    )};

}
  
  function mapStateToProps(state) {
    return {
      prova: sProva(state),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      prova: function() {
        dispatch(prova(episode));
      },
    };
   }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginPage);

  const styles = StyleSheet.create({
    container: {
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        backgroundColor: '#7777'   
    },
  });