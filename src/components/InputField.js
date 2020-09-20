import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import AppStyle from '../theme';
export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.StyleInputField.inputField}>
        <Image
          style={AppStyle.StyleInputField.image}
          source={this.props.icon}
        />
        <TextInput
          style={AppStyle.StyleInputField.textInput}
          placeholder={this.props.placeholder}
          selectionColor={'#B5B2B2'}
        />
      </View>
    );
  }
}
