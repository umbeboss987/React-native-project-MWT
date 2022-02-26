import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image,SafeAreaView, ActivityIndicator} from 'react-native';
import {sLoadUserProfile, sLoadingData} from '../store/selectors/appSelectors';
import {userProfile} from '../store/actions/appActions';
import { connect, useDispatch, useSelector } from "react-redux";
import React from 'react';
import { useEffect } from 'react';



function UserProfilePage({userProfile, loadingData}){

    useEffect (() =>{
       userProfile();
    },[])


    const sUserProfile = useSelector((state) =>{return state.userReducer.data})

    return(
        <SafeAreaView style={styles.container}>
            <View >
                <View style={styles.imageContainer}>
                {loadingData == true ?  <Image source={{uri: sUserProfile?.data?.images[0].url}} style={styles.image}>
                    </Image> : <ActivityIndicator/>}
               
                </View>
               
                <View style={styles.dates}>
                    <Text style={styles.title}>Follower</Text>
                    <Text style={styles.title}>Country</Text>
                </View>  
                <View style={styles.containerData}>
                    <Text style={styles.data}>{sUserProfile?.data?.followers.total}</Text>
                    <Text style={styles.data}>{sUserProfile?.data?.country}</Text>
                </View>               
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#010916',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: null,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image:{
        width: 200,
        height:200,
        borderRadius: 100,
        marginTop:30
    },
    dates:{
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'space-around',
    },
    title: {
        fontSize:20,
        color: 'white'
    },
    containerData:{
        flexDirection: 'row',
        marginTop:15,
        marginLeft:35,
        justifyContent: 'space-around',

    },
    data:{
        width:'30%',
        color: 'white',
        fontSize:15,
    }
})


function mapStateToProps(state) {
    return {
        sUserProfile : sLoadUserProfile(state),
        loadingData: sLoadingData(state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        userProfile : function() {
            dispatch(userProfile())
        }
      
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserProfilePage);