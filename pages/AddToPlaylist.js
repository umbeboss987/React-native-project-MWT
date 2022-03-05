import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , FlatList, SafeAreaView} from 'react-native';
import { connect } from "react-redux";
import { useEffect ,useState} from 'react';
import {sUserPlaylist} from '../store/selectors/appSelectors';
import {addTrackPlaylist, loadUserPlaylist} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';



function AddToPlaylist ({route,loadUserPlaylist, userPlaylist, addTrackPlaylist}){


  

    useEffect (()=>{
        loadUserPlaylist()
    },[loadUserPlaylist])

    const Item = ({title, id}) => (
        <View>
          <TouchableOpacity style={styles.item} onPress={()=>{addTrackPlaylist(id, route.params)}}>
            <View >
              <Text style={styles.titleSong}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );

    const renderItem = ({ item }) => (
      <View>
        <Item title={item.name} item={item} id={item.id}/>
      </View>
      );

    return(
        
            <View style={styles.container}>
                <SafeAreaView>
                    <View styles={styles.secondContainer}>
                        <Text style={styles.title}>Choose a Playlist</Text>
                    </View>
                    <FlatList
                        data={userPlaylist.items}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                     />
                </SafeAreaView>
            </View>
    )


}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#010916",
        flex:1,
        flexDirection: 'column',
        textAlign: 'center',
    },
    title: {
        fontSize:30,
        color: 'white',
        marginTop:20,
        marginLeft:15
    },
    secondContainer:{
        width:100,
        height:30
    },
    containerSongs:{
        flex: 1,
        height: 60,
        marginTop:30,
        marginLeft: 20
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
      
      item: {
        marginVertical: 8,
        paddingTop: 15,
        marginLeft:10,
        width: '100%',
        flexWrap:'wrap',
      },
      renderItemContainer:{
        flexDirection: 'row',
      },
})


function mapStateToProps(state) {
    return {
        userPlaylist : sUserPlaylist(state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        addTrackPlaylist:function(id, uri){
           dispatch(addTrackPlaylist(id, uri))
        },
        loadUserPlaylist:function(){
            dispatch(loadUserPlaylist())
         }
     
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddToPlaylist);
