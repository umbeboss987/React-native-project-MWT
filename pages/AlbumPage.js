import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView} from 'react-native';
import { connect } from "react-redux";
import { useEffect } from 'react';
import {sCategories, sSingleCategory} from '../store/selectors/appSelectors';
import {loadSingleCategory} from '../store/actions/appActions';
import {LinearGradient} from 'expo-linear-gradient';

function AlbumPage ({ singleCategory, route, loadSingleCategory}){

    useEffect(() =>{
        const {id} = route.params;
        loadSingleCategory(id)
    }, [loadSingleCategory()])

    return (
    <ScrollView style>
        <LinearGradient colors={['transparent','#010916', '#010916','#010916','#010916','#010916', '#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916','#010916']}>
            <View style={styles.container}>
                    <View style={styles.containerImage}>
                        <Image source={{uri:singleCategory.images[0].url}} style={styles.image}>
                        </Image>
                        <View style={styles.nameContainer}>
                        <Text style={styles.name}>{singleCategory.name}</Text>
                        </View>
                    </View>
                
            </View>
            <View style={styles.secondContainer}>
                <ScrollView>
                    {singleCategory.tracks.items.map(track =>{
                    return(    
                    <TouchableOpacity>
                        <View style={styles.containerSongs}>
                            <Text style={styles.songName}>{track.track.name}</Text>
                            <Text style={styles.artistName}>{track.track.artists[0].name}</Text>
                        </View>
                    </TouchableOpacity>
                    )})}
                </ScrollView>
            </View>
        </LinearGradient>
    </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
    image:{
        width:300, 
        height : 250,
    },
    containerImage:{
        alignItems: 'center',
        marginTop: 30
    },
    name:{
        color: 'white',
        fontSize: 30,
        marginTop:15
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
   artistName:{
    fontSize:14,
    color: 'grey',
    marginTop:5
   }
  
})


function mapStateToProps(state) {
    return {
        singleCategory : sSingleCategory(state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loadSingleCategory:function(id){
           dispatch(loadSingleCategory(id))
        }
     
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AlbumPage);

