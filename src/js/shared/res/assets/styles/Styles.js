//add this just after imports: var Strings = require('path-to/StringsEN');
//then can reference as Strings.CONSTANT_NAME_IN_ALL_CAPS

import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

module.exports = {

    theme: {
            primaryColor: "#1c4888", //primary color
            primaryLight: "#5473b8",    //primary light
            secondaryColor: "#059980", //secondary color
            secondaryDark: "#006a54",  //secondary dark
            secondaryLight: "#53cbaf", //secondary light
            brandDark: "#222",
            brandLight: "#f4f4f4",
    },


    keyboardView:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    loginButton:{
        flex:0,
        padding:0,
        margin:0,
        width: deviceWidth *.9,
        height: 56,
        borderRadius: 12,
        marginBottom:6,
        marginTop:6,

        text:{
            flexWrap:'wrap',
            paddingLeft:6,
            width:deviceWidth *.5,
            fontSize: 20,
            color:'#eee',
         },
        icon:{
            right: -deviceWidth*.33,
            // width:dimension*.4,
            marginRight:0,
            marginLeft:0,
            fontSize:35,
            textAlign:'right'
        }
    },
    line:{
        width:deviceWidth *.4,
        borderWidth: 1,
        margin:10,
        backgroundColor:'black'
    },
    text:{
        h1:{
            fontSize: 24,
            paddingBottom: deviceHeight*.01
        },
        h2:{
            fontSize:16,
            paddingBottom: deviceHeight*.05,
            textAlign:'center'
        }

    }

};

