import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';
import LoginPage from '../pages/LoginPage';

const TabNavigator = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function RootNavigator (){
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
                <React.Fragment>
                    <RootStack.Screen name="Home" component={Tabs} />
                </React.Fragment>             
            </RootStack.Navigator>            
        </NavigationContainer>
    )
}

function Tabs (){
    return (
        <TabNavigator.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    heigth: 90
                }
            }}
        >
          <TabNavigator.Screen name="Home" component={HomePage} 
            options={{
                tabBarLabel: 'home',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={25} />
                ),
            }}
          />
           <TabNavigator.Screen name="Test" component={TestPage} />
        </TabNavigator.Navigator>
    );
}