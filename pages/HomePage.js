import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, FlatList,SectionList,SafeAreaView} from 'react-native';
import {sProva, sCategories,sNewPlaylist, sNewReleases} from '../store/selectors/appSelectors';
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
      const {newPlaylist} = this.props; 
      const {navigation} = this.props;
      return(
      <View style={styles.container} >
        <SafeAreaView>
          <ScrollView>
                <View style={styles.containerCategories}>
                  <Text style={styles.title}>Categories</Text>
                  <View >
                  <ScrollView horizontal={true}>
                    { categories.map((category)=>{
                      return(
                          <Categories onPress={()=>{navigation.navigate('Album', category)}} title={category.name} key={category.id} images={category.images[0].url} />
                        )
                      })} 
                  </ScrollView>

                  </View>
                </View>
                <View style={styles.containerCategories}>
                  <Text style={styles.title}>New PlayList</Text>
                  <View >
                  <ScrollView horizontal={true}>
                    {newPlaylist.playlists.items.map((item)=>{
                      return(
                          <Categories onPress={()=>{navigation.navigate('Album', item)}} title={item.name} key={item.id} images={item.images[0].url}/>
                        )
                      })} 
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
                  {newReleases.items.map((album)=>{
                    return(
                      <View>
                        <Categories title={album.name} key={album.id} images={album.images[0].url} />
                      </View>
                        )
                      })}
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
  