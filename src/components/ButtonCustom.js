import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AppStyle from '../theme';
export default class ButtonCustom extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    console.log('ahaha');
  }

  render() {
    return (
      <View style={AppStyle.StyleButtonCustom.btnCustom}>
        <TouchableOpacity onPress={this.onPress} activeOpacity={0.5}>
          <Text style={AppStyle.StyleButtonCustom.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
