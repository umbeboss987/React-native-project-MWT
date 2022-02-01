import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';

const Categories = ({ title, images }) => {
  return (
    <View>
        <TouchableOpacity>
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

  imageBackground: {
    height: 230,
    width: 230,
    flex: 1,
  },
  categories: {
    margin: 10,
    height: 230,
    width: 230,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
      fontSize: 20,
      color: 'white',
  },
 
});

export default Categories;