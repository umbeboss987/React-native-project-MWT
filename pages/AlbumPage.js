import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, ActivityIndicator} from 'react-native';
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from 'react';
import {sCategories, sSingleCategory, sLoadingSingleCategory} from '../store/selectors/appSelectors';
import {loadSingleCategory} from '../store/actions/appActions';
import {LinearGradient} from 'expo-linear-gradient';
import PickerModal from '../components/PickerModal';
import Icon from 'react-native-vector-icons/Ionicons';


function AlbumPage ({loadingSingleCategory, route,loadSingleCategory}){

    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState(null);


    const items = [
        'Save in my Music',
       ];

    useEffect(() =>{
      const {id} = route.params;
        loadSingleCategory(id);
    },[loadSingleCategory])

    const singleCategory = useSelector((state) =>{return state.appReducer.singleCategory})

    
    if(loadingSingleCategory){

        return(
            <View style={styles.secondContainer}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    if(!loadingSingleCategory){
    return (      
    <ScrollView style>
        <LinearGradient start={{x:0.5, y:0.2}} colors={['#bbdefb','#010916']}>
        
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
                    <View style={styles.renderItemContainer}>
                        <TouchableOpacity key={i}>
                            <View style={styles.containerSongs}>
                                <Text style={styles.songName}>{track.track.name}</Text>
                                <Text style={styles.artistName}>{track.track.artists[0].name}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerIcon} onPress={() =>{setShowModal(true)}}>
                            <View >
                            <Icon name="ellipsis-vertical-outline" style={styles.icon}  size={25}/>
                            </View>
                        </TouchableOpacity>
                   </View>  
                    )})}
                </ScrollView>
            </View>
        </LinearGradient>
        <PickerModal visible={showModal} items={items} onClose={() =>{setShowModal(false)}} />
    </ScrollView>
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
    backgroundColor: '#010916'
   },
   renderItemContainer:{
    flexDirection: 'row',
  },
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

