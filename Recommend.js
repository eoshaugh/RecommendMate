import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text } = ReactNative;

export default class Recommend extends Component {
	constructor(props){
   super(props)
	}
  render() {
    return (
        <View id={this.props.id}>
          <Text>This is a Recomendation</Text>
          <Text>Title:{this.props.title}</Text>
          <Text>Genre:{this.props.genre}</Text>
          <Text>Description:{this.props.description}</Text>
        </View>
    );
  }
}