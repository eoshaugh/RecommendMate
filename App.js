import React from 'react';
import {Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Genres from './Genres.js';
import SendRec from './SendRec.js';
import ViewRec from './ViewRec.js';
import Friends from './Friends.js'

import * as firebase from "firebase";
import {dbconfig} from './dbconfig';

//initialise database
global.app = firebase.initializeApp(dbconfig);

//hard coded userIds 
global.u1 = 1;
global.u2 = 2;
global.u3 = 3;
global.u4 = 4;
global.u5 = 5;

class Home extends React.Component {
  
static navigationOptions = {
    header:(
     <View
      style={{
        backgroundColor: '#c7f464ff',
        height: 50,
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
       onPress={()=>this.props.navigation.navigate('ViewRec')}>
       <Text style ={styles.textInButton}>My Recommendations</Text>
      </TouchableOpacity>

       <Image
      style={{width: 105, height: 105, marginBottom: 10, marginTop: 10}} 
      source={require('./assets/shout.png')}
      />

     
      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Genres')}>
       <Text style={styles.textInButton}>Recommend Something!</Text>
      </TouchableOpacity>  
      
      </View>
    );
  }
}
const RootStack = StackNavigator(
{
  Home: {screen: Home,},
  Friends: {screen: Friends,},
  Genres: {screen: Genres,},
  SendRec: {screen: SendRec,},
  ViewRec: {screen: ViewRec,},
},
{ initialRouteName: 'Home',}
);
const styles = StyleSheet.create({
  myButton: {
    backgroundColor: '#c7f464ff',
    height:50,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5
  },
  textInButton:{
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    fontSize: 18,
  },
})


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}