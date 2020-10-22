import {StyleSheet} from 'react-native';

const StylePage = StyleSheet.create({
  container: {
    backgroundColor: '#E8C445',
    flex: 1,
    zIndex: 0,
    overflow:'scroll'
  },

  logo: {
    height: 100,
  },

  title: {
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
    margin: 40,
    fontFamily: 'Comfortaa-Regular',
  },

  textsOnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35
  },

  firstText: {
    color: 'white',
  },

  secondText: {
    color: '#E16C00',
  },

  btnInPage: {
    marginTop: 35,
    marginBottom: 35,
  },
});

export default StylePage;
