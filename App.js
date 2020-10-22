import React, {Component} from 'react';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import HomePage from './src/pages/HomePage';
import Menu from './src/components/Menu';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStyle from './src/theme';
import {Image, TouchableOpacity} from 'react-native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login Page" component={LoginPage} options={{headerShown:false}}/>
          <Stack.Screen name="Register Page" component={RegisterPage} options={{headerShown:false}}/>
          <Stack.Screen 
            name="Home Page" 
            component={HomePage} 
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#E16C00',
                height: 80,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'Comfortaa-Regular',
                fontSize:30
              },
              headerTitleAlign:'center',
              headerLeft: (props) => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Menu')}
                >
                  <Image
                    style={AppStyle.StyleInputField.imageMenu}
                    source={require('./src/assets/icons/menu.png')}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="Menu" component={MyDrawer} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // MyDrawer() {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Menu" component={Menu} />
  //     </Drawer.Navigator>
  //   )
  // }
}
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
  )
}
