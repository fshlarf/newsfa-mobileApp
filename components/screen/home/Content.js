import React from 'react';
import { 
  StyleSheet, 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View, 
  Image, 
  ScrollView  
} from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=a050e54685b44bf89ec55dbb472ee1d2')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
            <View> 
                <Image 
                  style={{width: 500, height: 200}}
                  source={{uri: item.urlToImage}}
                />
                <View style={styles.mainContent}>
                  <Text>{item.author} - {item.source.name}</Text>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
            </View>
          }
          keyExtractor={(index) => index}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 15,
        color: 'dodgerblue'
    },
    mainContent: {
        alignSelf: 'stretch',
        padding: 25,
        marginBottom: 8,
        borderTopWidth: 1,
        borderTopColor: '#ededed',
        backgroundColor: 'white'
    },
})