import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image,SafeAreaView, ActivityIndicator, FlatList} from 'react-native';
import {sLoadUserProfile, sLoadingData, sUserPlaylist} from '../store/selectors/appSelectors';
import {userProfile, loadUserPlaylist} from '../store/actions/appActions';
import { connect, useDispatch, useSelector } from "react-redux";
import React from 'react';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';



function UserProfilePage({userProfile, loadingData, loadUserPlaylist, userPlaylist, navigation}){

    useEffect (() =>{
       userProfile();
       loadUserPlaylist();
    },[])

    useEffect(() => {
      const willFocusSubscription = navigation.addListener('focus', () => {
        loadUserPlaylist();
      });

    return willFocusSubscription;
    }, []);

    const Item = ({title, item}) => (
        <View>
          <TouchableOpacity style={styles.item} onPress={() =>{navigation.navigate("PlaylistSongsPage", item)}}>
            <View >
              <Text style={styles.titleSong}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );

    const renderItem = ({ item }) => (
      <View>
        <Item title={item.name} item={item}/>
      </View>
      );
    

    const sUserProfile = useSelector((state) =>{return state.userReducer.data})

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
              <View  style={{marginTop:28, marginLeft:20, width:'45%'}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                      <Icon name="arrow-back-outline" style={styles.topIcon}  size={30}/>
                  </TouchableOpacity>
              </View> 
              <Text style={{color:"white", width:'68%',fontSize:40, marginTop:20}}>Profile</Text>
            </View>
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
            <View style={styles.containerPlaylists}>
                    <Text style={styles.titlePlaylist}>My Playlists</Text>    
                <View>
               <FlatList
                 data={userPlaylist.items}
                 renderItem={renderItem}
                 keyExtractor={item => item.id}
               />
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
        color: 'grey',
        fontSize:15,
    },
    titlePlaylist:{
        color:'white',
        fontSize:23,
    },
    containerPlaylists:{
        width:'100%',
        flexDirection: 'column',
        marginTop:50,
        marginLeft:30,
    },
    renderItemContainer:{
        flexDirection: 'row',
      },
    item: {
        marginVertical: 8,
        paddingTop: 15,
        marginLeft:10,
        width: '100%',
        flexWrap:'wrap',
    },
    titleSong: {
        fontSize: 20,
        color: 'grey'
      },
      typeSong: {
        fontSize: 13,
        marginTop: 8,
        color: 'grey',
      },
      item: {
        marginVertical: 8,
        paddingTop: 15,
        marginLeft:10,
        width: '100%',
        flexWrap:'wrap',
      },
      topIcon:{
        color:"white"
    },
    containerTitle:{
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
})


function mapStateToProps(state) {
    return {
        sUserProfile : sLoadUserProfile(state),
        loadingData: sLoadingData(state),
        userPlaylist : sUserPlaylist(state)
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        userProfile : function() {
            dispatch(userProfile())
        },
        loadUserPlaylist: function() {
            dispatch(loadUserPlaylist())
        }
      
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserProfilePage);