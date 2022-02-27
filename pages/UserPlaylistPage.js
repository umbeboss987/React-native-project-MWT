import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView} from 'react-native';
import { connect } from "react-redux";
import { useEffect ,useState} from 'react';
import {sUserLibrary} from '../store/selectors/appSelectors';
import {loadUserPlaylist} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalPicker from '../components/ModalPicker';



function UserPlaylistPage ({loadUserPlaylist, userPlaylist}){

  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState();

    //useEffect (()=>{
      //  loadUserPlaylist()
    //},[loadUserPlaylist])
    const items = ['Delete'];

    return(
        
            <View style={styles.container}>
                <SafeAreaView>
                    <View styles={styles.secondContainer}>
                        <Text style={styles.title}>Music</Text>
                    </View>
                    <ScrollView>
                    {userPlaylist.length > 0 ? userPlaylist?.map((playlist, i) =>{
                    return(    
                    <View style={styles.renderItemContainer} key={i}>
                        <TouchableOpacity key={playlist.id} style={styles.item}>
                            <View>                           
                                <Text style={styles.titleSong}>{playlist.name}</Text>
                                <Text style={styles.typeSong}>{playlist.album_type} * {playlist.artists[0].name}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerIcon} onPress={() =>{setShowModal(true), setItem(playlist)}}>
                            <View >
                            <Icon name="ellipsis-vertical-outline" style={styles.icon}  size={25}/>
                            </View>
                        </TouchableOpacity>
                   </View>
                    )}) : <View></View>}
                </ScrollView>
                  <ModalPicker visible={showModal} onClose={() =>{setShowModal(false)}} items={items} item={item}/>
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
    titleSong: {
        fontSize: 16,
        color: 'white'
      },
      typeSong: {
        fontSize: 13,
        marginTop: 8,
        color: 'grey',
      },
      containerIcon:{
        marginLeft: 'auto',
        justifyContent: 'center',
      },
      icon:{
        color: 'white',
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
       userPlaylist : sUserLibrary(state)
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
