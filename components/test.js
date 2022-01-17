import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {sProva} from '../store/selectors/appSelectors'


class Test extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View>
            <TouchableOpacity style={styles.button}
            >
              <Text style={styles.loginText} >{this.props.prova.state}</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

 function mapStateToProps(state) {
    return {
      prova: sProva(state),
    };
  }

  export default connect(
    mapStateToProps,
  )(Test);

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