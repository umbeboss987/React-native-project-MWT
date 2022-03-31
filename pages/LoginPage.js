import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import {sProva} from '../store/selectors/appSelectors';
import {getUsers} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import LoginButton from '../components/LoginButton';


class LoginPage extends Component{

  componentDidMount() {
    //this.props.getUsers();
  }

  render(){
    return(  
        <ImageBackground source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>
            <View style={styles.container}>
              <Image source={{uri:'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png'}} style={styles.image}>
              </Image>
              
              <LoginButton/>
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
      getUsers: function() {
        dispatch(getUsers());
      },
    };
   }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginPage);

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
    },
    imageBackground: {
      flex: 1,
      width: 500,
      height: null,
      resizeMode: 'cover',
      backgroundColor: '#7b1fa2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:250,
      height: 250,
      bottom: 60,
      resizeMode: 'contain',
    },
    input: {
      height: 45,
      margin: 12,
      padding: 10,
      borderRadius: 20,
      backgroundColor: 'white',
      width:300,
    },
    button: {
      backgroundColor: '#8e24aa',
      width:250,
      height:50,
      borderRadius:20,
      marginTop:30,
    },
    buttonText: {
      textAlign: 'center',
      marginTop: 15,
      fontSize: 20,
      color: 'white'
    }
    
  });