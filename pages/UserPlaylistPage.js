import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView} from 'react-native';
import { connect } from "react-redux";
import { useEffect } from 'react';
import {sUserPlaylist} from '../store/selectors/appSelectors';
import {loadUserPlaylist} from '../store/actions/appActions';


function UserPlaylistPage ({loadUserPlaylist, userPlaylist}){


    //useEffect (()=>{
    //    loadUserPlaylist()
  //  },[loadUserPlaylist])

    return(
        
            <View style={styles.container}>
                <SafeAreaView>
                    <View styles={styles.secondContainer}>
                        <Text style={styles.title}>Music</Text>
                    </View>
                    <ScrollView>
                    {userPlaylist?.map(playlist =>{
                    return(    
                    <TouchableOpacity key={playlist.id}>
                        <View style={styles.containerSongs}>
                            <Text style={styles.songName}>{playlist.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )})}
                </ScrollView>
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
    songName:{
        fontSize:18,
        color: 'white'
    },
})


function mapStateToProps(state) {
    return {
       userPlaylist : sUserPlaylist(state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loadUserPlaylist:function(){
           dispatch(loadUserPlaylist())
        }
     
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserPlaylistPage);
