import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import Content from './home/Content'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Beranda'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Content/>
            </View>
        );
    }
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