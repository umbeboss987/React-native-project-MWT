import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Categories = ({ title, images, onPress,}) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity {...{onPress}}>
            <View style={styles.categories} >
                    <Image source={{ uri:images}} style={styles.imageBackground}>
                    </Image>
            </View>
          </TouchableOpacity>
          <Text styles={styles.text}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:10,
  },
  imageBackground: {
    height: 170,
    width: 195,
    flex: 1,
  },
  categories: {
    marginTop:30,
    marginLeft:10,
    marginRight: 27,
    height: 150,
    width: 170,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
      marginTop:10,
      fontSize: 10,
      color: 'white',
  },
 
});

export default Categories;