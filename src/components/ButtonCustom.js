import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AppStyle from '../theme';
import {StackActions} from '@react-navigation/native';
export default class ButtonCustom extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    // this.props.navigateTo.navigate('Home Page');
    this.props.navigateTo.dispatch(StackActions.replace('Home Page'));
    this.props.navigateTo.reset({
      index:0,
      routes:[{name:'Home Page'}]
    })
  }

  render() {
    return (
      <View style={AppStyle.StyleButtonCustom.btnCustom}>
        <TouchableOpacity 
          style={AppStyle.StyleButtonCustom.btn}
          onPress={() => this.onPress()} 
          activeOpacity={0.5}
        >
          <Text style={AppStyle.StyleButtonCustom.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
