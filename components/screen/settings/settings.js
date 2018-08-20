import React from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

export default class Settings extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is Settings!</Text>
        </View>
        );
    }
}