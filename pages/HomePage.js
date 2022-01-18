import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {sProva} from '../store/selectors/appSelectors';
import {prova} from '../store/actions/appActions';
import {connect} from 'react-redux';


function HomePage({navigation}) {
    return (
      <View>
        <StatusBar style="auto" />
        <View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Test')}
          >
            <Text >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  function mapStateToProps(state) {
    return {
      prova: sProva(state),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      prova: function() {
        dispatch(prova(episode));
      },
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage);
  