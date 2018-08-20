import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button
} from 'react-native'


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/best.png')} />
                <Text
                style={styles.textNav}
                onPress ={ ()=> navigate('Home') }
                >Navigate to Home</Text>
                <Text 
                    style={{fontSize: 30, 
                    color: 'dodgerblue',
                    marginTop: 15}}
                >Faishal Arif</Text>
                <Button
                title="Go to Settings"
                onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );  
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNav: {
        color: 'dodgerblue'
    }
});