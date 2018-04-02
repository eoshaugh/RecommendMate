import React, {Component} from 'react';
import {Button, StyleSheet,Text, ScrollView, TextInput, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import {dbconfig} from './dbconfig';


class SendRec extends React.Component{
 	constructor(props){
 		super(props);
    
 		this.state = {
 			title: '',
 			description: '',
 			user: this.props.navigation.state.params.user,
 			genre: this.props.navigation.state.params.genre,
      recID: 0
 			}; 
 	}

 	sendRecommendation(genre, title, description, recipientID){
 		  var newchild = app.database().ref('recipient/').push({
   		genre: genre,
   		title: title,
    	description: description,
      recipient: recipientID
  		});
 	}

 	render() {
 		return (
 		  <ScrollView contentContainerStyle={styles.contentContainer}> 

        	<Text style = {{fontWeight: 'bold',
   			fontFamily: 'notoserif',
    		fontSize: 20,textAlign: 'center'}}>Title</Text> 

      		<TextInput
      		multiline = {true}
      		underlineColorAndroid='transparent'
        	style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
        	onChangeText={(title) => this.setState({title})}
       		value={this.state.title}
        	/>

        	<Text style = {{fontWeight: 'bold',
   			fontFamily: 'notoserif',
    		fontSize: 20,textAlign: 'center'}}>Description</Text> 

      		<TextInput
      		multiline = {true}
      		underlineColorAndroid='transparent'
      		style={{height: 150, width: 250, borderColor: 'gray', borderWidth: 1 }}
        	onChangeText={(description) => this.setState({description})}
       		value={this.state.description}
        	/>


 	   		<TouchableOpacity style={styles.myButton}
       		onPress={() => this.sendRecommendation(this.state.genre, this.state.title, this.state.description,this.state.user)}>
       		<Text style ={styles.textInButton}>Send</Text>
       		</TouchableOpacity>

       	</ScrollView>
       );
 	}
 }
const styles = StyleSheet.create({
  myButton: {
    backgroundColor: '#c7f464ff',
    height:50,
    width: 250,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 5

  },
  textInButton:{
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20

  },
})

export default SendRec;

