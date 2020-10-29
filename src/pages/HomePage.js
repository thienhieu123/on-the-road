import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AppStyle from '../theme';
import RequiredBox from '../components/RequiredBox';
import Header from '../components/Header';
// import Menu from '../components/Menu';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

export class HomePage extends Component {

    constructor(props){
        super(props);
        let listFieldCreateBox = [
            {
                placeholder: 'Name of Journey',
                icon: require('../assets/icons/journey_name.png')
            },
            {
                placeholder: 'Password',
                icon: require('../assets/icons/password.png')
            },
            {
                placeholder: 'Place to begin',
                icon: require('../assets/icons/place_start.png')
            },
            {
                placeholder: 'Place to end',
                icon: require('../assets/icons/place_end.png')
            }
        ]

        let listFieldJoinBox = [
            {
                placeholder: 'Id of Journey',
                icon: require('../assets/icons/journey_id.png')
            },
            {
                placeholder: 'Password',
                icon: require('../assets/icons/password.png')
            },
        ]

        this.state = {
            listFieldCreateBox: listFieldCreateBox,
            listFieldJoinBox: listFieldJoinBox,
            createBoxVisible: false,
            joinBoxVisible: false
        }
    }
    createJourney(){
        this.setState({createBoxVisible:true})
    }

    joinJourney(){
        this.setState({joinBoxVisible:true})
    }

    render() {
        return (
            <View style={AppStyle.StylePage.mainPage}>
                <Header 
                    headerText="Home"
                    onPress={()=>this.props.navigation.openDrawer()}
                />
                <View style={AppStyle.StyleRequiredBox.centeredView}>
                
                    <RequiredBox 
                        title="Create A Journey"
                        listInput={this.state.listFieldCreateBox}
                        btnText="Create"
                        visible={this.state.createBoxVisible}
                        onPress={()=> this.setState({createBoxVisible:false})}
                    />
                    <RequiredBox 
                        title="Join In A Journey"
                        listInput={this.state.listFieldJoinBox}
                        btnText="Join"
                        visible={this.state.joinBoxVisible}
                        onPress={()=> this.setState({joinBoxVisible:false})}
                    />
                    <TouchableOpacity 
                        style={AppStyle.StylePage.homePageBtn}
                        onPress={() => this.createJourney()} 
                        activeOpacity={0.5}
                    >
                        <Text style={AppStyle.StylePage.textBtn}>Create A Journey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={AppStyle.StylePage.homePageBtn}
                        onPress={() => this.joinJourney()} 
                        activeOpacity={0.5}
                    >
                        <Text style={AppStyle.StylePage.textBtn}>Join In A Journey</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

export default HomePage
