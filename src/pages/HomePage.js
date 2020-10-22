import React, { Component } from 'react'
import { Text, View } from 'react-native'
//import Menu from './src/components/Menu';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

export class HomePage extends Component {
    render() {
        return (
            <View>
                <Text> Home Pageeee </Text>
            </View>
            // <NavigationContainer>
            //     <Drawer.Navigator>
            //         <Drawer.Screen name="Menu" component={Menu} />
            //     </Drawer.Navigator>
            // </NavigationContainer>
        )
    }
}

export default HomePage
