import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AppStyle from '../theme';

export default class ButtonCustom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.StyleButtonCustom.btnCustom}>
        <TouchableOpacity 
          style={AppStyle.StyleButtonCustom.btn}
          onPress={this.props.onPress} 
          activeOpacity={0.5}
        >
          <Text style={AppStyle.StyleButtonCustom.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
