import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

export default class NotifScreen extends React.Component {
    static navigationOptions = {
        title: 'Notifikasi'
    };
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{marginBottom: 10}}>This is Notification!</Text>
            <Image source={require('../../assets/images/notif.png')} />
        </View>
        );
    }
}