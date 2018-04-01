import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
//import SendRec from '/SendRec.js'

export default class friends extends React.Component {
	constructor(props){
 		super(props);
    
 		this.state = {
 			genre: this.props.navigation.state.params.genre
 			}; 
 	}
   render() {
    return (
    	<View style = {{flex: 1, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center',
        alignItems: 'center' }}>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('SendRec', {user: u1, genre: this.state.genre})}>
       <Text style ={styles.textInButton}>Erica</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('SendRec', {user: u2, genre: this.state.genre})}>
       <Text style ={styles.textInButton}>Jack</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('SendRec', {user: u3, genre: this.state.genre})}>
       <Text style ={styles.textInButton}>Roghan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('SendRec', {user: u4, genre: this.state.genre})}>
       <Text style ={styles.textInButton}>Dylan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('SendRec', {user: u5})}>
       <Text style ={styles.textInButton}>Rory</Text>
      </TouchableOpacity>

      </View>
    	);
	}

}
const styles = StyleSheet.create({
  myButton: {
    backgroundColor: '#c7f464ff',
    height:50,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
     marginBottom: 13
  },
  textInButton:{
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    fontSize: 18,
  },
})