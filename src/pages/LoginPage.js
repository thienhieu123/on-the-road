import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AppStyle from '../theme';
import InputField from '../components/InputField';
import ButtonCustom from '../components/ButtonCustom';
import {StackActions} from '@react-navigation/native';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  login(){
    this.props.navigation.dispatch(StackActions.replace('Home Page'));
    this.props.navigation.reset({
      index:0,
      routes:[{name:'Home Page'}]
    })
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
            onPress={() => this.login()}
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
