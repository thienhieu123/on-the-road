import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AppStyle from '../theme';
import InputField from '../components/InputField';
import ButtonCustom from '../components/ButtonCustom';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.navigation);
  }
  render() {
    return (
      <View style={AppStyle.StylePage.container}>
        <Image style={AppStyle.StylePage.logo} />
        <View>
          <Text style={AppStyle.StylePage.title}>Log In</Text>
        </View>

        <View>
          <InputField
            placeholder="username"
            icon={require('../assets/icons/email.png')}
          />
          <InputField
            placeholder="password"
            icon={require('../assets/icons/password.png')}
          />
        </View>

        <View style={AppStyle.StylePage.btnInPage}>
          <ButtonCustom 
            text="LOG IN" 
            navigateTo={this.props.navigation}
          />
        </View>

        <View style={AppStyle.StylePage.textsOnRow}>
          <Text style={AppStyle.StylePage.firstText}>
            You don’t have account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register Page')}
          >
            <Text style={AppStyle.StylePage.secondText}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}
