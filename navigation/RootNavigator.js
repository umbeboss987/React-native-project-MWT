import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import AlbumPage from '../pages/AlbumPage';
import UserPlaylistPage from '../pages/UserPlaylistPage';
import UserProfilePage from '../pages/UserProfilePage';
import SongPlayerPage from '../pages/SongPlayerPage';
import PlaylistSongsPage from '../pages/PlaylistSongsPage';
import AddToPlaylist from '../pages/AddToPlaylist';



const TabNavigator = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function RootNavigator (){
    return(
        <NavigationContainer>
            <RootStack.Navigator  screenOptions={{
                headerStyle: { backgroundColor:'#4F0F59',
                height: 100,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23
                  },
              }}>
                <RootStack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
                <React.Fragment>
                    <RootStack.Screen options={{ headerShown: false }} name="Tab" component={Tabs} />
                </React.Fragment> 
                <RootStack.Screen options={{ headerShown: false }} name="Album" component={AlbumPage} /> 
                <RootStack.Screen options={{ headerShown: false }} name="Profile" component={UserProfilePage}  />  
                <RootStack.Screen options={{ headerShown: false }} name="SongPlayerPage" component={SongPlayerPage}  />  
                <RootStack.Screen options={{ headerShown: false }} name="PlaylistSongsPage" component={PlaylistSongsPage}  /> 
                <RootStack.Screen options={{ headerShown: false }} name="AddToPlaylist" component={AddToPlaylist}  />                                                                                                                                                                           
            </RootStack.Navigator>            
        </NavigationContainer>
    )
}

function Tabs (){
    return (
        <TabNavigator.Navigator
        options={{
                showLabel: false,
                activeTintColor: 'white'
               
            }}
            screenOptions={{
                tabBarStyle: { backgroundColor:'#4F0F59',
                height: 100,
                activeTintColor: '#cd077d',
            },
              }}
        >
          <TabNavigator.Screen name="Home" component={HomePage} 
            options={{
                tabBarLabel: 'home',
                tabBarColor: '#004991',
                headerShown: false,
                tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={25} />
                ),
            }}
          />
           <TabNavigator.Screen name="search" component={SearchPage} 
            options={{
                tabBarLabel: 'search',
                tabBarColor: '#1f65ff',
                headerShown: false,
                tabBarIcon: ({color}) => (
                <Icon name="search" color={color} size={25} />
                ),
            }}
           />
           <TabNavigator.Screen name="Playlits" component={UserPlaylistPage} 
            options={{
                tabBarLabel: 'library',
                tabBarColor: '#1f65ff',
                headerShown: false,
                tabBarIcon: ({color}) => (
                <Icon name="library" color={color} size={25} />
                ),
            }}
           />
        </TabNavigator.Navigator>
    );
}
