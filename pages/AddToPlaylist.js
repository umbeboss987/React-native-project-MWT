import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , FlatList, SafeAreaView, Alert} from 'react-native';
import { connect } from "react-redux";
import { useEffect ,useState} from 'react';
import {sUserPlaylist} from '../store/selectors/appSelectors';
import {addTrackPlaylist, loadUserPlaylist} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';



function AddToPlaylist ({route,loadUserPlaylist, userPlaylist, addTrackPlaylist, navigation}){

    useEffect (()=>{
        loadUserPlaylist()
    },[loadUserPlaylist])


    const add_track_playlist = (id) => {
        addTrackPlaylist(id, route.params)
        Alert.alert("Added to your Playlist","",[
            {text : 'Ok', onPress: ()=>{}}
        ]);
        navigation.navigate("Profile")
    }

    const Item = ({title, id}) => (
        <View>
          <TouchableOpacity style={styles.item} onPress={()=> add_track_playlist(id)}>
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
                        <View style={styles.containerTitle}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Icon name="arrow-back-outline" style={styles.topIcon}  size={30}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>Choose a Playlist</Text>
                        </View>
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
        width:'70%'
    },
    secondContainer:{
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
      topIcon:{
        color:"white", 
        marginTop:20,
        marginLeft:7
    },
    containerTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:40
    }
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
