import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ResponseType,useAuthRequest} from 'expo-auth-session';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';


const LoginButton = () =>{
    const navigation = useNavigation();

    const auth = {
        authorizationEndpoint : "https://accounts.spotify.com/authorize",
        tokenEndpoint : "https://accounts.spotify.com/api/token"
    }

    const [request, response, promptAsync] = useAuthRequest ({
        responseType: ResponseType.Token,
        clientId: 'abf98f2ce5554b1983c334ecf6565a8e',
        clientSecret: '726d702d52a04f4fbd30dd9d778db781',
        scopes:[
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-state",
            "user-top-read",
            "user-modify-playback-state",
            "streaming",
            //"user-read-email",
            "user-read-private",
        ],
        usePKCE : false,
        redirectUri: "exp://127.0.0.1:19000/"
    },auth)

    useEffect (()=>{
        if(response?.type === "success"){
            const {access_token} = response.params
            console.log(access_token);
            storeData(access_token);
            navigation.navigate("Home");
        }
    },[response])

    const storeData = async(token)=>{
        try {
            await AsyncStorage.setItem('@access_token', token)
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <TouchableOpacity onPress={()=> promptAsync()}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#8e24aa',
      width:250,
      height:50,
      borderRadius:20,
      marginTop:30,
    },
    buttonText: {
      textAlign: 'center',
      marginTop: 15,
      fontSize: 20,
      color: 'white'
    }
    
});

export default LoginButton;