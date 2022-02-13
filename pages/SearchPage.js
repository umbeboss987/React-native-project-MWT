import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux";
import { useEffect, useState} from 'react';
import {loadSearchSong} from '../store/actions/appActions';


function SearchPage({loadSearchSong}){

        const [input, setInput] = useState("Type to search")

        return(
            <SafeAreaView style={styles.container}>
                <View >
                    <Text style={styles.title}>Search Page</Text>
                    <View style={styles.searchContainer}>
                        <SearchBar style={styles.input}
                         onChangeText={newInput => setInput(newInput)}
                         placeholder={input}
                         onSubmitEditing={loadSearchSong(input)}
                         value={input}
                        ></SearchBar>
                    </View>
                </View>
            </SafeAreaView>
        )

}



const styles = StyleSheet.create({
    container: { 
      flex:1,    
      backgroundColor: '#010916',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input:{
        borderRadius: 10,
        fontSize:20,
    },
    title:{
        fontSize: 40,
        color: 'white',
    },
    searchContainer:{
        width:400,
        marginTop:30
    }
})



function mapStateToProps(state) {
    return {
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loadSearchSong: function(input){
            dispatch(loadSearchSong(input))
        }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchPage);
