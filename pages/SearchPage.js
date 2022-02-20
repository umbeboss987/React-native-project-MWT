import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,FlatList, ActivityIndicator} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect , useSelector} from "react-redux";
import {sUserPlaylist} from '../store/selectors/appSelectors';
import { useEffect, useState} from 'react';
import {loadSearchSong} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';
import PickerModal from '../components/PickerModal';



function SearchPage({loadSearchSong, searchSong}){

        const [input, setInput] = useState("");
        const [showModal, setShowModal] = useState(false);
        const [item, setItem] = useState();
        const [id, setId] = useState();


        const songs = searchSong;
        
        const singleCategory = useSelector((state) =>{return state.appReducer.search})

        const items = [
         'Save in my Music',
         'Save in my Music'
        ];

        useEffect (()=>{
          loadSearchSong(input);
        },[input])

                
        const Item = ({ title, type , artistName, id}) => (
            <View style={styles.renderItemContainer}>
              <TouchableOpacity style={styles.item}>
                <View >
                  <Text style={styles.titleSong}>{title}</Text>
                  <Text style={styles.typeSong}>{type} * {artistName}</Text>
                </View>
              </TouchableOpacity>
                <TouchableOpacity style={styles.containerIcon} onPress={() =>{setId(id),setItem(type),setShowModal(true)}}>
                  <View >
                    <Icon name="ellipsis-vertical-outline" style={styles.icon}  size={25}/>
                  </View>
                </TouchableOpacity>
            </View>
          );

        const renderItem = ({ item }) => (
          <View>
            <Item id={item.id} title={item.name} type={item.album_type} artistName={item.artists[0].name}/>
          </View>
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
                <PickerModal visible={showModal} items={items} onClose={() =>{setShowModal(false)}} type={item} id={id}/>
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
        flexWrap:'wrap',
      },
      titleSong: {
        fontSize: 16,
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
      },
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
