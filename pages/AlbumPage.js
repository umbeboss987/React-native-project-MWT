import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, ActivityIndicator, SafeAreaView} from 'react-native';
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from 'react';
import {sCategories, sSingleCategory, sLoadingSingleCategory} from '../store/selectors/appSelectors';
import {loadSingleCategory} from '../store/actions/appActions';
import {LinearGradient} from 'expo-linear-gradient';
import PickerModal from '../components/PickerModal';
import Icon from 'react-native-vector-icons/Ionicons';



function AlbumPage ({loadingSingleCategory, route,loadSingleCategory, navigation}){


    useEffect(() =>{
      const {id} = route.params;
      console.log(id);
        loadSingleCategory(id);
    },[loadSingleCategory])

    const singleCategory = useSelector((state) =>{return state.appReducer.singleCategory})

    
    if(loadingSingleCategory){

        return(
            <View style={styles.thirdContainer}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    if(!loadingSingleCategory){
    return ( 
    <View>
       
    <ScrollView>  
        <LinearGradient start={{x:0.5, y:0.2}} colors={['#bbdefb','#010916']}>  
        <View  style={{marginTop:60, marginLeft:15}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Icon name="arrow-back-outline" style={styles.topIcon}  size={30}/>
            </TouchableOpacity>
        </View> 
            <View style={styles.container}>
                    <View style={styles.containerImage}>
                        
                        <Image source={{uri:singleCategory.images[0].url}} style={styles.image}>
                        </Image>
                        <View style={styles.nameContainer}>
                        <Text style={styles.name}>{singleCategory.name}</Text>
                        </View>
                    </View>         
            </View>
        </LinearGradient>
        <LinearGradient start={{x:0.001, y:0.1}} colors={['#010916','#010916','#010916','#010916','#010916']}>
            <View style={styles.secondContainer}>
                <ScrollView>
                    {singleCategory.tracks.items.map((track,i) =>{
                    return(  
                    <View style={styles.renderItemContainer} key={i}>
                        <TouchableOpacity onPress={() =>{navigation.navigate("SongPlayerPage", track.track)}}>
                            <View style={styles.containerSongs}>
                                <Text style={styles.songName}>{track.track.name}</Text>
                                <Text style={styles.artistName}>{track.track.artists[0].name}</Text>
                            </View>
                        </TouchableOpacity>
                   </View>  
                    )})}
                </ScrollView>
            </View>
        </LinearGradient>
    </ScrollView>
    </View>
    )
  }
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
   icon:{
    color: 'white',
  },
   containerIcon:{
    marginLeft: 'auto',
    justifyContent: 'center',
  },
   artistName:{
    fontSize:14,
    color: 'grey',
    marginTop:5
   },
   secondContainer:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#010916',
   },
   renderItemContainer:{
    flexDirection: 'row',
  },
  topIcon:{
      color:"black"
  },
  thirdContainer:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#010916',
    justifyContent:"center",
    alignItems:"center"
  }
})


function mapStateToProps(state) {
    return {
        singleCategory : sSingleCategory(state),
        loadingSingleCategory : sLoadingSingleCategory(state)
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

