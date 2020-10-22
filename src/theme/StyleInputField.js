import {StyleSheet} from 'react-native';

const StyleInputField = StyleSheet.create({
  inputField: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: '#E8C445',
    borderWidth: 1,
    alignItems: 'center',
    height: 50,
    margin: 10,
    paddingLeft: 8,
  },
  textInput: {
    marginLeft: 10,
    color: 'black',
    flex: 1,
  },
  image: {
    width: 24,
    height: 24,
  },

  imageMenu: {
    width: 30,
    height: 30,
    marginLeft: 20
  },

  btnCustom: {
    backgroundColor: '#E16C00',
    color: 'white',
    textAlign: 'center',
  },
});

export default StyleInputField;
