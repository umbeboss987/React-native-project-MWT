import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';
import {sProva} from '../store/selectors/appSelectors';
import {loadCategories, getUsers} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';


class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.getUsers();
  }
    render() {
      return(
      <View style={styles.container} >
        <View style={styles.containerCategories}>
          <View style={styles.categories} >
            <Image source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>

            </Image>
          </View>
          <View style={styles.categories}>
           <Image source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>

           </Image>
          </View>
          <View style={styles.categories}>
            <Image source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>

            </Image>
          </View>
          <View style={styles.categories}>
            <Image source={{uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.imageBackground}>

            </Image> 
          </View>
        </View>
      </View>
    )};
}
  
  function mapStateToProps(state) {
    return {
      prova: sProva(state),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      loadCategories: function() {
        dispatch(loadCategories());
      },
      getUsers: function(){
        dispatch(getUsers());
      }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#010916',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    categories: {
      width:180,
      height: 180,
      backgroundColor: 'white',
      margin: 10,
      marginTop:30
    },
    containerCategories: {
      flexDirection: 'row',
      marginTop: 10,
      flexWrap: 'wrap',
      margin: 10,
    },
    imageBackground: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      backgroundColor: '#7b1fa2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  