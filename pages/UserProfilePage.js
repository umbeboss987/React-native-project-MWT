import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, FlatList,SectionList,SafeAreaView, ActivityIndicator} from 'react-native';
import {sProva, sCategories} from '../store/selectors/appSelectors';
import {loadCategories, getUsers, loadNewPlaylist, loadNewReleases} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';


function UserProfilePage(){

    return(
        <SafeAreaView style={styles.container}>
            <View >
                <View style={styles.imageContainer}>
                <Image source={{ uri:'https://anghamiwebcdn.akamaized.net/web/assets/img/landing/ManWeb_landing.png'}} style={styles.image}>
                    </Image>
                </View>
                <View style={styles.dates}>
                    <Text style={styles.title}>prova</Text>
                    <Text style={styles.title}>prova</Text>
                    <Text style={styles.title}>prova</Text>
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
    },
    title: {
        fontSize:25,
        padding:40,
        color: 'white'
    }
})


function mapStateToProps(state) {
    return {
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserProfilePage);