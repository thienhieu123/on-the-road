import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import AppStyle from '../theme';
export class Menu extends Component {
    render() {
        return (
            <SafeAreaView style={AppStyle.StyleMenu.container}>
                <View style={AppStyle.StyleMenu.user}>
                    <Image 
                        style={AppStyle.StyleMenu.avatar}
                        source={require('../assets/icons/avatar.png')}
                    />
                    <Text style={AppStyle.StyleMenu.username}>Hoang Don Thien Hieu</Text>
                </View>
                <TouchableOpacity 
                    style={AppStyle.StyleMenu.page}
                    onPress={() => console.log('test')}
                >
                    <Image 
                        style={AppStyle.StyleMenu.pageIcon}
                        source={require('../assets/icons/profile.png')}
                    />
                    <Text style={AppStyle.StyleMenu.pageName}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={AppStyle.StyleMenu.page}>
                    <Image 
                        style={AppStyle.StyleMenu.pageIcon}
                        source={require('../assets/icons/friends.png')}
                    />
                    <Text style={AppStyle.StyleMenu.pageName}>Friend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={AppStyle.StyleMenu.page}>
                    <Image 
                        style={AppStyle.StyleMenu.pageIcon}
                        source={require('../assets/icons/log_out.png')}
                    />
                    <Text style={AppStyle.StyleMenu.pageName}>Log out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Menu
