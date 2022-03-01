import { StyleSheet,View, Modal, TouchableOpacity, Alert} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useEffect, useState} from 'react';
import { connect , useSelector} from "react-redux";
import {deleteSong} from '../store/actions/appActions';

function  ModalPicker ({visible, onClose, items, item, delete_song}){

            const [value, setValueState] = useState(" ")

            useEffect(() =>{
                if(value){
                    setValueState(value)
                }
            },[value])

            const deleteSong = () =>{
                delete_song(item);
                onClose();
                Alert.alert("Deleted item","",[
                    {text : 'Ok', onPress: ()=>{console.log('alert Closed')}}
                ]);
            }
    return(
        <Modal animated transparent visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" color="purple" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="check" onPress={deleteSong} color="purple" size={30}/>
                        </TouchableOpacity>
                    </View>
                    <Picker
                        selectedValue={value}
                        onValueChange={(value) => setValueState(value)}
                        style={styles.itemPicker}
                    >
                        { items != undefined ? items.map((item,i) =>
                        <Picker.Item value={item} key={i} label={item} style={{color: 'white'}}/>
                        ):  <Picker.Item />}
                    </Picker>
                </View>
            </View>
        </Modal>
   )
  }



const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      pickerContainer:{
        width:'100%',
        height:300,
        backgroundColor:'grey'
      },
      iconContainer:{
          height:50,
          flexDirection:'row',
          justifyContent: 'space-between',
      },  
      itemPicker:{
          color:'white',
      }
})



function mapStateToProps(state) {
    return {
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loadSearchSong: function(input){
            dispatch(loadSearchSong(input))
        },
        delete_song: function(input){
            dispatch(deleteSong(input))
        }
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ModalPicker);