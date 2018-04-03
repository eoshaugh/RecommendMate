import React, {Component} from 'react';
import {Button, StyleSheet,Text, ScrollView, TextInput, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import {dbconfig} from './dbconfig';
import Recommend from'./Recommend.js'
global.rec = [];


export default class ViewRec extends React.Component{
constructor(props){
	
 		super(props);
 		
 		this.state = {
 			dataSource: [],
 			}; 
      this.descriptionref = app.database().ref('recipient/')
 	}

componentDidMount(){
    var items = [];
    var that=this; //stupid error
 		this.descriptionref.orderByChild("recipient").equalTo(1).on('value', function (snap) {
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          genre: child.val().genre,
          description:child.val().description,
          _key: child.key
        });
      });
      that.setState({
        dataSource: items
      });
 		});
 	}
 

 	render() {
    console.log(this.state.dataSource)
     const theType = this.state.dataSource;
  	const recommendations = theType.map((theType,index)=>
  	<Recommend
      title={theType.title}
  		genre={theType.genre}
  		description={theType.description}
      key={theType.key}
      id={index}/>);
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

