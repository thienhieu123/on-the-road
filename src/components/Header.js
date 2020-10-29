import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import AppStyle from '../theme';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={AppStyle.StylePage.headerContainer}>
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <Image
                    style={AppStyle.StyleInputField.imageMenu}
                    source={require('../assets/icons/menu.png')}
                />
            </TouchableOpacity>
            <Text style={AppStyle.StylePage.headerText}> {this.props.headerText} </Text>
            <Text style={{width:50}}></Text>
        </SafeAreaView>
    );
  }
}

export default Header;
