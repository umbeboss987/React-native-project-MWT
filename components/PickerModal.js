import { StyleSheet,View, Modal, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-elements/dist/icons/Icon';
import { useEffect, useState} from 'react';
import { connect , useSelector} from "react-redux";
import {Picker} from '@react-native-picker/picker';


function PickerModal ({visible, onClose, items, type, id}) {

            const [value, setValueState] = useState("stringa")
            console.log(type);
            console.log(id);
            console.log(items[0].value)
            useEffect(() =>{
                if(value){
                    setValueState(value)
                }
            },[value])
    return(
        <Modal animated transparent visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" color="purple" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="check" color="purple" size={30}/>
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
        loadSearchSong: function(input){
            dispatch(loadSearchSong(input))
        }
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PickerModal);