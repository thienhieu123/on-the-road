import {StyleSheet} from 'react-native';

const StyleMenu = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E8C445',
        padding: 30,
    },

    user:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:50,
        marginLeft:10
    },

    avatar:{
        marginRight:10
    },

    username:{
        color:'#fff',
        fontSize:20,
        fontFamily:'Comfortaa-Regular',
        width:200
    },

    page:{
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },

    pageIcon:{
        marginRight:10
    },

    pageName:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Comfortaa-Regular',
    }
})

export default StyleMenu;
