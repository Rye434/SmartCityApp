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


    keyboardView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        input: {
            width: deviceWidth * .8,
            flexDirection: 'row',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: 10,
            marginBottom: 10,
            alignItems: 'center'

        },
        profileLabelText: {
            color: "#1c4888",
            marginLeft: deviceWidth * .09
        },
        input2: {
            marginBottom: deviceHeight * .03
        }
    },
    button: {
        loginButton: {
            button: {
                flex: 0,
                padding: 0,
                margin: 0,
                width: deviceWidth * .9,
                height: 56,
                borderRadius: 12,
                marginBottom: 6,
                marginTop: 6,
            },
            textFacebook: {
                flexWrap: 'wrap',
                paddingLeft: 6,
                width: deviceWidth * .5,
                fontSize: 20,
                color: '#eee'
            },
            textPhone: {
                flexWrap: 'wrap',
                paddingLeft: 6,
                width: deviceWidth * .5,
                fontSize: 20,
                color: '#5473b8'

            },
            iconPhone: {
                right: -deviceWidth * .33,
                // width:dimension*.4,
                marginRight: 0,
                marginLeft: 0,
                fontSize: 35,
                textAlign: 'right',
                color: '#5473b8'
            },
            iconFacebook: {
                right: -deviceWidth * .33,
                // width:dimension*.4,
                marginRight: 0,
                marginLeft: 0,
                fontSize: 35,
                textAlign: 'right',
                color: '#eee'
            }
        },
        loginBackButton: {
            icon: {
                marginRight: 2
            },
            text: {
                paddingLeft: 5
            },
            button: {
                marginTop: deviceHeight * 0.025
            }

        },

        loginButton2: {
            paddingTop: deviceHeight * .15,
            width: deviceWidth * .9,
            justifyContent: 'center'
        },
        verificationResend: {
            paddingTop: deviceHeight * .15,
            width: deviceWidth * .9,
            alignSelf: 'center'
        }

    },
    line: {
        width: deviceWidth * .4,
        borderWidth: 1,
        borderColor: '#eee',
        margin: 10,
        backgroundColor: '#eee'
    },
    text: {
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: deviceHeight * .01,
            color: '#eee',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        h2: {
            fontSize: 16,
            paddingBottom: deviceHeight * .05,
            textAlign: 'center',
            color: '#eee',
            backgroundColor: 'rgba(0,0,0,0)',
            width: deviceWidth * 0.8
        },
        loginText: {
            already: {
                flexWrap: 'wrap',
                paddingRight: 3,
                fontSize: 16,
                color: '#eee',
                textAlign: 'right'

            },
            login: {
                flexWrap: 'wrap',
                paddingLeft: 3,
                fontSize: 16,
                color: '#eee',
                textDecorationLine: 'underline'
            },

        },
        input: {
            backgroundColor: 'blue',
            marginBottom: 10
        }

    },
    image: {
        loginBackgroundImage: {
            flex: 1,
            width: deviceWidth,
            height: deviceHeight,
            justifyContent:'center',
            alignItems:'center'
        },
        icon: {
            width: deviceWidth * .5,
            height: deviceHeight * .3,
            paddingBottom: 6
        },
    },


    mapModal:{
        buttons:{
            moreInfo: {
                backgroundColor: 'red',
                height: 40,
                flex: 1,
                marginLeft: 8,
                marginRight: 4,
            },
            plusOne: {
                backgroundColor: 'blue',
                height: 40,
                flex: 1,
                marginLeft: 8,
                marginRight: 4,
            }
        },

        },

    profileFields:{
        textFields:{
            marginLeft: 16,
            marginTop: 30,
        },
        nameTextField:{
            color: "#006a54",
            fontWeight: "bold",
            fontSize: 15,
        },
        phoneNumberText:{
            marginTop: 45,
            color:"#059980",
            fontSize: 14,
        },
        subContentField:{
            marginTop: 5,
            marginBottom: 10,
            fontSize: 16,
        },
        subTitleField:{
            marginTop: 10,
            color:"#059980",
            fontSize: 14,
        },
        addressSubField:{
            topField:{
                marginTop: 5,
                fontSize: 16,
            },
            middleField:{
                marginTop: 2,
                marginBottom: 2,
                fontSize: 16,
            },
            bottomField:{
                marginBottom: 10,
                fontSize: 16,
            },
        },
    },

    cameraWarning:{
        textFieldTitle:{
            textAlign: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 5,
            fontWeight: 'bold',
            justifyContent:'center',
            fontSize: 24,
        },
        textField:{
            textAlign: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 15,
            fontSize: 15,
        },
        buttonField:{
            alignSelf: 'center',
            backgroundColor: '#059980',
            width: deviceWidth/1.25,
        },
        buttonText:{
            textAlign: 'center',
            justifyContent:'center',
            flex: 1,
        },
        centerView:{
            flex: 1,
            width: deviceWidth,
            height: deviceHeight/1.25,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    aboutContent:{
        aboutView:{
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
            opacity: 1
        },
        aboutAppTitle:{
            color:'#006a54',
            fontSize: 18,
            fontWeight: 'bold',
        },
        versionAbout:{
            color:'#006a54',
            marginTop: 2,
            fontSize: 12,
        },
        aboutDescription:{
            fontSize: 14,
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 20,
        },
        contactInfoTitle:{
            fontSize: 12,
            color:'#006a54',
            fontWeight: 'bold',
        },
        nameTitle:{
            fontSize: 14,
            marginBottom: 2,
            marginTop: 5,
            color: '#059980',
        },
        emailTitle:{
            fontSize: 16,
            marginBottom: 10,
        },

    },


}

