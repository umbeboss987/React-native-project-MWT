import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function TestPage() {
    return (
        <View>
            <StatusBar style="auto" />
            <View>
                <TouchableOpacity
                >
                    <Text >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
