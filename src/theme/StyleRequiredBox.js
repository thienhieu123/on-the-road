import {StyleSheet} from 'react-native';

const StyleRequiredBox = StyleSheet.create({
    btnInBox:{
        marginTop: 35,
        marginBottom: 35,
    },

    container:{
        backgroundColor: '#E16C00',
        // flex:1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        //zIndex: 10,
        //marginHorizontal: 20
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    modalView: {
        width:350,
        margin: 20,
        backgroundColor: '#E8C445',
        borderRadius: 20,
        padding: 10,
        paddingBottom: 50,
        shadowColor: "#E16C00",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },

    title:{
        color:'#fff',
        fontSize:30,
        fontFamily:'Comfortaa-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 25
    }
})

export default StyleRequiredBox;