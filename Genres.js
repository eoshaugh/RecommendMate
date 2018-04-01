import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Genres extends React.Component {
   render() {
    return (
      <View style = {{flex: 1, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center',
        alignItems: 'center' }}>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends', {genre: 'movies'})}>
       <Text style ={styles.textInButton}>Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends', {genre: 'TV'})}>
       <Text style ={styles.textInButton}>TV Series</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends', {genre: 'Books'})}>
       <Text style ={styles.textInButton}>Books</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends', {genre: 'Music'})}>
       <Text style ={styles.textInButton}>Music</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
       onPress={()=>this.props.navigation.navigate('Friends', {genre: 'Restaurants'})}>
       <Text style ={styles.textInButton}>Restaurants</Text>
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