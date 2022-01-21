import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import {sProva} from '../store/selectors/appSelectors';
import {prova} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';


class LoginPage extends Component{

  render(){
    return(  
        <ImageBackground source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>
          <View style={styles.container}>
            <Image source={{uri:'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png'}} style={styles.image}>

            </Image>
            <TextInput
              style={styles.input}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
            />
          </View>
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
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 250,
      height: 300
    },
    imageBackground: {
      flex: 1,
      width: 500,
      height: null,
      resizeMode: 'cover',
      backgroundColor: '#7b1fa2',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:250,
      height: 250,
      position: 'absolute',
      bottom: 160,
      resizeMode: 'contain',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
      backgroundColor: 'white'
    },
    
  });