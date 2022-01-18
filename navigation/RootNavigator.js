import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';



const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={HomePage} />
                <RootStack.Screen name="Test" component={TestPage} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}