import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, FlatList,SectionList,SafeAreaView, ActivityIndicator} from 'react-native';
import {sProva, sCategories,sNewPlaylist, sNewReleases, sLoadingCategories, sLoadingNewRelease, sLoadingNewPlaylist} from '../store/selectors/appSelectors';
import {loadCategories, getUsers, loadNewPlaylist, loadNewReleases} from '../store/actions/appActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Categories from '../components/Categories';


class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadNewReleases();
    this.props.loadNewPlaylist();
  }

  
    render() {
      const {categories} = this.props; 
      const {newReleases} = this.props;
      const {playlists} = this.props.newPlaylist; 
      const {navigation} = this.props;
      const {loadingCategories} = this.props;
      const {loadingNewReleases} = this.props;
      const {loadingNewPlaylist} = this.props;


      return(
      <View style={styles.container} >
        <SafeAreaView>
          <ScrollView>
                <View style={styles.containerCategories}>
                  <Text style={styles.title}>Categories</Text>
                  <View >
                  <ScrollView horizontal={true}>
                    {loadingCategories != true ? categories.map((category)=>{
                      return(
                          <Categories onPress={()=>{navigation.navigate('Album', category)}} title={category.name} key={category.id} images={category.images[0].url} />
                        )
                      }) : <ActivityIndicator size="large"/>} 
                  </ScrollView>
                  </View>
                </View>
                <View style={styles.containerCategories}>
                  <Text style={styles.title}>New PlayList</Text>
                  <View >
                  <ScrollView horizontal={true}>

                    {!loadingNewPlaylist ? playlists?.items.map((item)=>{
                      return(
                          <Categories onPress={()=>{navigation.navigate('Album', item)}} title={item.name} key={item.id} images={item.images[0].url}/>
                        )
                      }) : <ActivityIndicator size="large"/>} 
                  </ScrollView>

                  </View>
                </View>
              <View style={styles.containerCategories}>
                <Text style={styles.title}>New Releases</Text>
                <ScrollView 
                  contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap'}}
                >
                  {!loadingNewReleases ? newReleases.items?.map((album)=>{
                    return(
                      <View>
                        <Categories title={album.name} key={album.id} images={album.images[0].url} />
                      </View>
                        )
                      }) : <ActivityIndicator size="large"/>}
                </ScrollView> 
              </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )};

}
  
  function mapStateToProps(state) {
    return {
      prova: sProva(state),
      categories: sCategories(state),
      newReleases: sNewReleases(state),
      newPlaylist : sNewPlaylist(state),
      loadingCategories : sLoadingCategories(state),
      loadingNewReleases : sLoadingNewRelease(state),
      loadingNewPlaylist : sLoadingNewPlaylist(state),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      loadCategories: function() {
        dispatch(loadCategories());
      },
      getUsers: function(){
        dispatch(getUsers());
      },
      loadNewReleases: function() {
        dispatch(loadNewReleases());
      },
      loadNewPlaylist: function() {
        dispatch(loadNewPlaylist());
      },
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#010916',
      flex: 1,
      flexDirection: 'column',
    },
    imageBackground: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      backgroundColor: '#7b1fa2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 40,
      color: 'white',
    },
    containerCategories:{
      marginLeft:10,
      marginTop:10,
    },
    albums:{
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  })
  