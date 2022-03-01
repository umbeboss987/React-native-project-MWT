import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { connect, useSelector } from "react-redux";
import { useEffect ,useState} from 'react';
import {sUserLibrary} from '../store/selectors/appSelectors';
import {getSinglePlaylist} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalPicker from '../components/ModalPicker';


function PlaylistSongsPage ({route, getSinglePlaylist}){

  const {id} = route.params;

    useEffect (() =>{
        getSinglePlaylist(id);
    },[])



    const [showModal, setShowModal] = useState(false);

    const Item = ({title, item}) => (
      <View>
        <TouchableOpacity style={styles.item}>
          <View >
            <Text style={styles.titleSong}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

  const renderItem = ({ item }) => (
    <View>
      <Item title={item.track.name} item={item}/>
    </View>
    );

    const sUserProfile = useSelector((state) =>{return state.userReducer.playlists.data?.items})

      return(  
        <View style={styles.container}>
            <SafeAreaView>
                <View styles={styles.secondContainer}>
                    <Text style={styles.title}>My Playlist</Text>
                </View>
                <FlatList
                 data={sUserProfile}
                 renderItem={renderItem}
                 keyExtractor={item => item.track.id}
               />
              <ModalPicker visible={showModal} onClose={() =>{setShowModal(false)}} />
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
  item: {
    marginVertical: 8,
    paddingTop: 15,
    marginLeft:10,
    width: '100%',
    flexWrap:'wrap',
},
})


function mapStateToProps(state) {
return {
};
}

function mapDispatchToProps(dispatch) {
return {
    getSinglePlaylist:function(id){
       dispatch(getSinglePlaylist(id))
    }
 
};
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(PlaylistSongsPage);
