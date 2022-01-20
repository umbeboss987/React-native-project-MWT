import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';


export default class TestPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
                <StatusBar style="auto" />
                <View>
                    <TouchableOpacity
                    >
                        <Text >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
