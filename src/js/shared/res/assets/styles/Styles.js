//add this just after imports: var Strings = require('path-to/StringsEN');
//then can reference as Strings.CONSTANT_NAME_IN_ALL_CAPS

import {Dimensions} from 'react-native';

var dimension = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;

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

    item:{
        marginLeft: 0,
    },

    keyboardView:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },

    loginButton:{
        width: dimension *.9,
        height: 56,
        borderRadius: 15,
        lineHeight:3,
        text:{
            width:dimension *.9,
            lineHeight: 56,
            fontSize: 18,
            textAlign: 'center'
        },
        icon:{
            color:'white',
            fontSize:35
        }
    },
    line:{
        width:dimension *.4,
        borderWidth: .5,
        borderColor:'black',
        margin:10,
    },

    text:{
        h1:{
            fontSize: 24,
            paddingBottom: Height*.01
        },
        h2:{
            fontSize:16,
            paddingBottom: Height*.05
        }

    }

};

