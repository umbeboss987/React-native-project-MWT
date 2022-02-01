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
      console.log(categories);
      const section = {
        title : "Categories",
        data: categories
      }
      return(
      <View style={styles.container} >
        <Text style={styles.title}>Categories</Text>
        <View style={styles.containerCategories}>
          <SectionList  horizontal={true} showsHorizontalScrollIndicator={true} section={section} renderItem={({item})=>(
            <Categories key={item.id} title={JSON.stringify(item.name)} images={item.icons[0].url}/>
          )}
          renderSectionHeader={({ section: { title} }) => (
            <Text style={styles.title}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}

          />
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
    title:{
      fontSize: 40,
      color: 'white',
      flex:1
  }
  })
  