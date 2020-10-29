import {StyleSheet} from 'react-native';

const StylePage = StyleSheet.create({
  mainPage:{
    flex:1
  },
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

  homePageRow:{
    flex:1,
    flexDirection: "column",
    justifyContent: 'center',
  },

  homePageBtn:{
    backgroundColor: '#E16C00',
    height: 100,
    margin: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBtn: {
    color: 'white',
    fontSize: 26,
    //fontWeight: 'bold',
  },

  headerContainer:{
    backgroundColor: '#E8C445',
    height: 100,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIconLeft:{

  },
  headerText:{
    color:'#fff',
    fontSize:30,
    fontFamily:'Comfortaa-Regular',
    textAlign: 'center',
  }

});

export default StylePage;
