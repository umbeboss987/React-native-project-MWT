import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView, TextInput} from 'react-native';
import { connect } from "react-redux";
import { useEffect } from 'react';

export default function SearchPage(){

        return(
            <SafeAreaView style={styles.container}>
                <View >
                    <Text style={styles.title}>Search Page</Text>
                    <View>
                        <TextInput style={styles.input}></TextInput>
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
        height: 45,
        width:380,
        marginTop: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    title:{
        fontSize: 40,
        color: 'white',
    }
})