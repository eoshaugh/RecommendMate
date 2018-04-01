import React, {Component} from 'react';
import {Button, StyleSheet,Text, ScrollView, TextInput, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import {dbconfig} from './dbconfig';


export default class ViewRec extends React.Component{
constructor(props){
	
 		super(props);
 		this.titleref = app.database().ref('recipient/1/title')
 		this.descriptionref = app.database().ref('recipient/1/description')
 		this.state = {
 			title: '',
 			description: ''
 			}; 
 	}

 componentDidMount(){
 	this.titleref.on('value', data => {
 		this.setState({
 			title: data.val()
 			
 			});
 		
 	});
 	this.descriptionref.on('value', data => {
 		this.setState({
 			description: data.val()
 			
 			});
 		
 	});
 
 	}
 

 	render() {

 		return (
 		<View style = {{flex: 1, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center',
        alignItems: 'center' }}>

 		<View style = {styles.myButton}>
 			<Text style ={styles.textInButton}>{this.state.title}</Text>
 		
 			<Text style ={styles.textInButton}> {this.state.description} </Text>
 		</View>

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