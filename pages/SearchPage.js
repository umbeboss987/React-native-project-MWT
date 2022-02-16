import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Item, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect , useSelector} from "react-redux";
import {sUserPlaylist} from '../store/selectors/appSelectors';
import { useEffect, useState} from 'react';
import {loadSearchSong} from '../store/actions/appActions';
import { ActivityIndicator } from "react-native-web";


function SearchPage({loadSearchSong, searchSong}){

        const [input, setInput] = useState("")
        const songs = searchSong;
        
        const singleCategory = useSelector((state) =>{return state.appReducer.search})

        
        console.log(singleCategory)
        const Item = ({ title }) => (
            <View style={styles.item}>
              <Text style={styles.titleSong}>{title}</Text>
            </View>
          );

          useEffect (()=>{
            console.log("entrato")
            loadSearchSong(input);
          },[input])

        const renderItem = ({ item }) => (
            <Item title={item.name} />
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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '100%'
      },
      titleSong: {
        fontSize: 17,
      },
      containerSongs:{
          flex:1,
          marginTop: 40
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
