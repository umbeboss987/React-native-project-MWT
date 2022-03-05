import { StyleSheet,View, Modal, TouchableOpacity, Alert} from 'react-native';
import  Icon  from 'react-native-elements/dist/icons/Icon';
import { useEffect, useState} from 'react';
import { connect , useSelector} from "react-redux";
import {Picker} from '@react-native-picker/picker';
import {saveTrack, loadUserPlaylist} from '../store/actions/appActions';
import AddSong from '../components/AddSong';
import { useNavigation } from '@react-navigation/native';


function PickerModal ({visible, onClose, items, item ,saveTrack, uri}) {
             const navigation = useNavigation();


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
            const addToPlaylist = () => {
                onClose();
                 navigation.navigate("AddToPlaylist", uri);              
            }
    return(
        <View>
        <Modal animated transparent visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" color="purple" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={value == "Save in my Music" ? save_track_album : addToPlaylist}>
                            <Icon name="check"  color="purple" size={30}/>
                        </TouchableOpacity>
                    </View>
                    <Picker
                        selectedValue={value}
                        onValueChange={(value) => setValueState(value)}
                        style={styles.itemPicker}
                    >
                        { items.map((item, i) =>{
                           return <Picker.Item value={item} key={i} label={item} />
                        })
                        }
                    </Picker>
                </View>
            </View>
        </Modal>
        </View>
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
        },
        loadUserPlaylist: function() {
            dispatch(loadUserPlaylist())
        }
      
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PickerModal);