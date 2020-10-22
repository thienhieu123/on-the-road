import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import AppStyle from '../theme';
import InputField from '../components/InputField';
import ButtonCustom from '../components/ButtonCustom';

export class RegisterPage extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.navigation);
      }
    render() {
        return (
            <ScrollView>
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
                    <InputField
                        placeholder="re-password"
                        icon={require('../assets/icons/re_password.png')}
                    />
                    <InputField
                        placeholder="full name"
                        icon={require('../assets/icons/full_name.png')}
                    />
                    <InputField
                        placeholder="phone number"
                        icon={require('../assets/icons/phone_number.png')}
                    />
                    </View>
            
                    <View style={AppStyle.StylePage.btnInPage}>
                    <ButtonCustom 
                        text="SIGN UP"
                        navigateTo="123ssd" 
                    />
                    </View>
            
                    <View style={AppStyle.StylePage.textsOnRow}>
                        <Text style={AppStyle.StylePage.firstText}>
                            You have a account?{' '}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login Page')}
                        >
                            <Text style={AppStyle.StylePage.secondText}>Log In</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ScrollView>
        );
      }
}

export default RegisterPage
