import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, FlatList,SectionList} from 'react-native';
import {sProva, sCategories} from '../store/selectors/appSelectors';
import {loadCategories, getUsers} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Categories from '../components/Categories';


class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.loadCategories();
  }

  
    render() {
      const {categories} = this.props; 
     
      return(
      <View style={styles.container} >
        <View style={styles.containerCategories}>
          <Text style={styles.title}>Categories</Text>
          <View >
            <FlatList
              data={categories}
              renderItem={({item})=>{
              return (
              <Categories title={item.name} key={item.id} images={item.icons[0].url}/>
              )
              }}
              horizontal={true}
            />
          </View>
        </View>
        <View>
          <Text>Dio cane</Text>
        </View>
      </View>
    )};
}
  
  function mapStateToProps(state) {
    return {
      prova: sProva(state),
      categories: sCategories(state),
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
      flexDirection: 'column',
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
    title:{
      fontSize: 40,
      color: 'white',
    },
    containerCategories:{
      marginLeft:10,
      marginTop:10,
    }
  })
  