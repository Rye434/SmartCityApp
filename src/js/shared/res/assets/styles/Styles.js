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
            height: deviceHeight

        },
        icon: {
            width: deviceWidth * .5,
            height: deviceHeight * .3,
            paddingBottom: 6
        },
        loginBackgroundImage: {
            flex: 1,
            width: deviceWidth,
            height: deviceHeight
        }

    }
}
