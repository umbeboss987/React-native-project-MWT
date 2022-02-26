import { StyleSheet,View, Modal, TouchableOpacity, Alert} from 'react-native';
import  Icon  from 'react-native-elements/dist/icons/Icon';
import { useEffect, useState} from 'react';
import { connect , useSelector} from "react-redux";
import {Picker} from '@react-native-picker/picker';
import {saveTrack} from '../store/actions/appActions';


function PickerModal ({visible, onClose, items, item ,saveTrack}) {

            const [value, setValueState] = useState("stringa")
            useEffect(() =>{
                if(value){
                    setValueState(value)
                }
            },[value])

            const save_track_album = ()=>{
                    saveTrack(item);
                    onClose();
                    Alert.alert("Added to your library","",[
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
                        <TouchableOpacity onPress={save_track_album}>
                            <Icon name="check"  color="purple" size={30}/>
                        </TouchableOpacity>
                    </View>
                    <Picker
                        selectedValue={value}
                        onValueChange={(value) => setValueState(value)}
                        style={styles.itemPicker}
                    >
                        { items.map((item) =>{
                           return <Picker.Item value={item} label={item} />
                        })
                        }
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
        saveTrack: function(id){
            dispatch(saveTrack(id))
        }
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PickerModal);