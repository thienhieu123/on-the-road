import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import AppStyle from '../theme';
import ButtonCustom from '../components/ButtonCustom';
import InputField from '../components/InputField';

class RequiredBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
            <Modal
                visible={this.props.visible}
                transparent={true}
                animationType={"slide"}
                //onRequestClose={() => {}}
            >
                <View style={AppStyle.StyleRequiredBox.centeredView1}>
                    <View style={AppStyle.StyleRequiredBox.modalView}>
                        <Text style={AppStyle.StyleRequiredBox.title}> {this.props.title}</Text>
                        <View>
                            {this.props.listInput.map(element => <InputField placeholder={element.placeholder} icon={element.icon}/>)}  
                        </View>
                        <View style={AppStyle.StyleRequiredBox.btnInBox}>
                            <ButtonCustom 
                                text={this.props.btnText}
                                onPress={this.props.onPress}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
      </View>
    );
  }
}

export default RequiredBox;
