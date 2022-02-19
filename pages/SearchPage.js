import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Item, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect , useSelector} from "react-redux";
import {sUserPlaylist} from '../store/selectors/appSelectors';
import { useEffect, useState} from 'react';
import {loadSearchSong} from '../store/actions/appActions';
import { ActivityIndicator } from "react-native-web";
import Icon from 'react-native-vector-icons/Ionicons';


function SearchPage({loadSearchSong, searchSong}){

        const [input, setInput] = useState("")
        const songs = searchSong;
        
        const singleCategory = useSelector((state) =>{return state.appReducer.search})
                
        const Item = ({ title, type , artistName}) => (
          <TouchableOpacity>
            <View style={styles.renderItemContainer}>
                <View style={styles.item}>
                  <Text style={styles.titleSong}>{title}</Text>
                  <Text style={styles.typeSong}>{type} * {artistName}</Text>
                </View>
                <View style={styles.containerIcon}>
                  <Icon name="ellipsis-vertical-outline" style={styles.icon} size={25}/>
                </View>
            </View>
          </TouchableOpacity>
          );

          useEffect (()=>{
            loadSearchSong(input);
          },[input])

        const renderItem = ({ item }) => (
            <Item title={item.name} type={item.album_type} artistName={item.artists[0].name}/>
          );
        
        return(
            <SafeAreaView style={styles.container}>
                <View >
                    <Text style={styles.title}>Search Page</Text>
                    <View style={styles.searchContainer}>
                        <SearchBar style={styles.input}
                          onChangeText={input => setInput(input)}
                          placeholder={"Type to search"}
                          value={input}
                        ></SearchBar>
                    </View>
                </View>
                <View style={styles.containerSongs}>
                { singleCategory ?
                <FlatList
                    data={singleCategory}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                : <ActivityIndicator/>}
                </View>
            </SafeAreaView>
        )

}



const styles = StyleSheet.create({
    container: { 
      flex:1,    
      backgroundColor: '#010916',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input:{
        borderRadius: 10,
        fontSize:20,
    },
    title:{
        fontSize: 40,
        color: 'white',
    },
    searchContainer:{
        width:400,
        marginTop:30
    },
    item: {
        marginVertical: 8,
        paddingTop: 15,
        marginLeft:10,
        width: '100%',
      },
      titleSong: {
        fontSize: 11,
        color: 'white'
      },
      typeSong: {
        fontSize: 13,
        marginTop: 8,
        color: 'grey',
      },
      containerSongs:{
          flex:1,
          marginTop: 40
      },
      icon:{
        color: 'white',
      },
      renderItemContainer:{
        flexDirection: 'row',
      },
      containerIcon:{
        marginLeft: 'auto',
        justifyContent: 'center',
      }
})



function mapStateToProps(state) {
    return {
        searchSong : sUserPlaylist (state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loadSearchSong: function(input){
            dispatch(loadSearchSong(input))
        }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchPage);
