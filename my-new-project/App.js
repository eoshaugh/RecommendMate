import React from 'react';
import {Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

class Home extends React.Component {
  static navigationOptions = {
    header:(
     <View
      style={{
        backgroundColor: '#50D050',
        height: 40,
        marginTop: 20 /* only for IOS to give StatusBar Space */
      }}
    >
      <Text style = {{fontWeight: 'bold',
    fontFamily: 'notoserif',
    fontSize: 30,textAlign: 'center'}}>RecommendMate</Text>
    </View>
  )
  };
  render() {
    return (
      <View style = {{flex: 1, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center',
        alignItems: 'center' }}> 
      
       <Image
      style={{width: 100, height: 100, marginBottom: 10}} 
      source={require('./assets/trophy.png')}/>
      
      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Genres')}>
       <Text style ={styles.textInButton}>My Recommendations</Text>
      </TouchableOpacity>

       <Image
      style={{width: 105, height: 105, marginBottom: 10, marginTop: 10}} 
      source={require('./assets/shout.png')}
      />

     
      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends')}>
       <Text style={styles.textInButton}>Recommend Something!</Text>
      </TouchableOpacity>  
      
      </View>
    );
  }
}
class Genres extends React.Component {
  render() {
    return (
      <View>
      <Text> Genres </Text>
      </View> 
      );
    }
}
class Friends extends React.Component {
   render() {
    return (
      <View>
      <Text> Friends </Text>
      </View> 
      );
    }
}
const RootStack = StackNavigator(
{
  Home: {screen: Home,},
  Friends: {screen: Friends,},
  Genres: {screen: Genres,},
},
{ initialRouteName: 'Home',}
);
const styles = StyleSheet.create({
  myButton: {
    backgroundColor: '#50D050',
    height:40,
    width: 200,
    alignItems: 'center',
    padding: 10,
  },
  textInButton:{
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    fontSize: 14,
  },
})


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
