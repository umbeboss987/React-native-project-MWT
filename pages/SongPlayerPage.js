import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Dimensions} from 'react-native';
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from 'react';
import {sCategories, sSingleCategory, sLoadingSingleCategory} from '../store/selectors/appSelectors';
import {loadSingleCategory} from '../store/actions/appActions';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {Audio} from "expo-av";


const {width , heigth} = Dimensions.get('window')

    





function SongPlayerPage ({route}){

    const [playbackObj, setPlaybackObj] = useState();
    const [status, setStatus] = useState(null);

    const handlePressAudio = async () =>{
    if(status == null){
        const playbackObj = new Audio.Sound();
        const newStatus = await playbackObj.loadAsync(require("../assets/music/Hollywood.mp3"), {shouldPlay : true});
        newStatus.isPlaying = true;
       return [setStatus(newStatus), setPlaybackObj(playbackObj)];         
    }
    
      
    console.log("playing" +status.isPlaying)
    console.log("loaded" + status.isLoaded)
        if(status.isLoaded && status.isPlaying){
           const newStatus =  playbackObj.setStatusAsync({shouldPlay : false});
           return [setStatus(newStatus), newStatus.isPlaying = false, newStatus.isLoaded = true];         
        }

        if(status.isLoaded && !status.isPlaying){
            const newStatus = await playbackObj.playAsync();
            return[setStatus(newStatus), newStatus.isPlaying = true]; 
        }
    }


    useEffect (() =>{
        Audio.requestPermissionsAsync();
        Audio.setAudioModeAsync({
       staysActiveInBackground: true,
       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
       shouldDuckAndroid: false,
       playThroughEarpieceAndroid: false,
       allowsRecordingIOS: false,
       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
       playsInSilentModeIOS: true,
       });
   },[handlePressAudio])
  
    return (
        <View style={styles.maxContainer}>
        <SafeAreaView style={styles.container}>
           <View style={styles.mainContainer}>
               <View style={styles.artworkContainer}>
                   <Image style={styles.image} source={{uri: route.params.images[0].url}}></Image>
                   <View style={styles.textContainer} >
                    <Text style={styles.textSong}>{route.params.name}</Text>
                    <Text style={styles.textArtistName}>{route.params.artists[0].name}</Text>
                   </View>
               </View>
               <View>
                   <Slider style={styles.slider} value={10} thumbTintColor='purple'/>
               </View>
               <View style={styles.musicControl}>
                    <Icon name="play-skip-back-outline" color="white" size={35} style={{marginTop:20}}></Icon>
                    <TouchableOpacity onPress={()=>{handlePressAudio()}}>
                        <Icon name={ status === null || status.isPlaying == false  ? "ios-play-circle" : "ios-pause-circle" } color="white" size={80}></Icon>
                    </TouchableOpacity>
                    <Icon name="play-skip-forward-outline" color="white" size={35} style={{marginTop:20}}></Icon>
               </View>
            </View>
           <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'80%'}}>
                    <Icon name="heart-outline" color="white" size={30}></Icon>
                    <Icon name="heart-outline" size={30}></Icon>
                </View>
           </View>
        </SafeAreaView>
        </View>
    )

}



function mapStateToProps(state) {
    return {
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
  )(SongPlayerPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#010916'
    },
    mainContainer: {
        height: '90%',
        justifyContent: "center",
        alignItems: 'center'
    },
    bottomContainer: {
        borderTopColor : "#393E46", 
        borderTopWidth : 1, 
        width: width,
        alignItems: "center", 
        paddingVertical: 15
    },
    artworkContainer:{
        width:300,
        height:340,
        marginBottom:100,
        justifyContent:'center',
        alignItems: "center",     
    },
    artWork:{
        width:'100%',
        height:'100%',

    },
    maxContainer:{
        flex:1
    },
    image:{
        height:'100%',
        width:'100%',
    },
    slider:{
        width:350
    },
    musicControl:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%',
        marginTop:20
    },
    textSong:{
        color:'white',
        fontSize:25
    },
    textContainer:{
        marginTop:20,
        justifyContent:'center',
        alignItems: "center",     
    },
    textArtistName:{
        color:'grey',
        fontSize:20,
        marginTop:7
    }
})