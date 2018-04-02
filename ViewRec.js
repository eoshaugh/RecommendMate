import React, {Component} from 'react';
import {Button, StyleSheet,Text, ScrollView, TextInput, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import {dbconfig} from './dbconfig';
global.rec = [];


export default class ViewRec extends React.Component{
constructor(props){
	
 		super(props);
 		this.descriptionref = app.database().ref('recipient/')
 		this.state = {
 			description: []
 			}; 
 	}

 componentDidMount(){
 
 		this.descriptionref.orderByChild("recipient").equalTo(1).on('value', function (snap) {
 		global.rec.push(snap.val()); // Push children to a local users array
 		console.log(rec);
 		});
 			this.setState({
 			description: rec
 			});	
 	
 	
 	}
 

 	render() {

 	const theType = rec;
  	const recommendations = theType.map((theType,index)=>
  	<View key={index}>
  		<Text>{theType.title}</Text>
  		<Text>{theType.genre}</Text>
  		<Text>{theType.description}</Text>
  	</View>);
 		return (
 		<View>
 		{recommendations}
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