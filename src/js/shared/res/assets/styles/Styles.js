//add this just after imports: var Strings = require('path-to/StringsEN');
//then can reference as Strings.CONSTANT_NAME_IN_ALL_CAPS

import {Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const resizeMode = 'center';
const platform = Platform.OS;
if(Platform.OS == 'ios'){
    taskbarPadding = 0 ;
    contentFontWeight = '600';

}
if(Platform.OS == 'android'){
    taskbarPadding = deviceHeight * 0.1;
    contentFontWeight = '400';
}
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
    header:{
        width:deviceWidth,
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomWidth:0,
        elevation:0
    },

    footer:{
        icon:{
            fontSize:35 ,
            marginTop:0,
            paddingBottom:0
        }
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
            phoneButton:{
                flex: 0,
                padding: 0,
                margin: 0,
                width: deviceWidth * .9,
                height: 56,
                borderRadius: 12,
                marginBottom: 6,
                marginTop: 6,
                justifyContent:'center'
            },
            textFacebook: {
                flexWrap: 'wrap',
                paddingLeft: 6,
                marginRight: platform === "ios" ? deviceWidth * .13 : deviceWidth * .1,
                width: platform === "ios" ? deviceWidth * .6 : deviceWidth * .7,
                fontSize: 20,
                textAlign:platform === "ios" ? 'center' : 'center',
                color: '#eee',
                fontWeight: platform === "ios" ? '600' : '400'
            },
            textPhone: {
                flexWrap: 'wrap',
                paddingLeft: 6,
                //marginRight: deviceWidth * .15,
                width: deviceWidth * .6,
                fontSize: 20,
                textAlign:'center',
                color: '#5473b8',
                fontWeight: platform === "ios" ? '600' : '400'

            },
            iconPhone: {
                //right: -deviceWidth * .33,
                // width:dimension*.4,
                marginRight: 0,
                marginLeft: 0,
                paddingLeft:deviceWidth*.05,
                fontSize: 35,
                textAlign: 'right',
                color: '#5473b8'
            },
            iconFacebook: {
                //right: -deviceWidth * .33,
                // width:dimension*.4,
                marginRight: 0,
                marginLeft: 0,
                paddingLeft:deviceWidth*.05,
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
            paddingBottom: platform === "ios" ? 0 : taskbarPadding,

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
        //width: deviceWidth * .4,
        flex:3,
        borderBottomWidth: 1.2,
        borderColor: '#eee',
        //backgroundColor: '#eee'
    },
    lineBox:{
        flex:1,
        flexDirection:'row',
        //justifyContent:'center',
        marginTop: 10,
        marginBottom:10,
        height:25
    },
    lineText:{
        height:25,
        flex:1,
        fontSize:18,
        backgroundColor: 'rgba(0,0,0,0)',
        color:'#eee',
        textAlign:'center',
        alignSelf:'center'
    },
    text: {
        loginH1:{
            fontSize: 32,
            fontWeight: 'bold',
            paddingBottom: deviceHeight * .06,
            color: '#eee',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: deviceHeight * .01,
            color: '#eee',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        h2: {
            fontSize: 16,
            paddingBottom: 5,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#eee',
            backgroundColor: 'rgba(0,0,0,0)',
            width: deviceWidth * 0.8
        },
        textWhite:{
            color:'#f4f4f4'
        },
        content:{
            fontSize:16
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


    map: {
        mapModal: {
            thumbnail: {
                marginLeft: deviceWidth * .04
            },
            textView: {
                marginLeft: 10,
                marginTop: 20,
                flexDirection: 'column'
            },
            buttons: {
                moreInfo: {
                    backgroundColor: '#5473b8',
                    height: 40,
                    flex: 1,
                    marginLeft: 8,
                    marginRight: 4,
                },
                plusOne: {
                    backgroundColor: '#059980',
                    height: 40,
                    flex: 1,
                    marginLeft: 4,
                    marginRight: 4,
                }
            },
            text:{
                title:{
                    fontSize:22,
                    fontWeight:'500'
                },
                note:{
                    fontWeight:'500',
                    color:'#222'
                }
            }

        },
        detailModal:{
            backButton:{
                marginTop:deviceHeight*.03
            },
            infoView:{
                backgroundColor:'#1c4888',
                height:80,
                marginBottom:10,
                justifyContent:'center',
                paddingLeft:deviceWidth * 0.05,

            },
            plusOne:{
                backgroundColor: '#059980',
                width: deviceWidth * .95,
                marginTop:6,
                marginBottom: 10,
                alignSelf:'center',
                justifyContent:'center'
            },
            detailView:{
                justifyContent:'center',
                paddingLeft:deviceWidth * 0.05
            },
            text:{

                header:{
                    color:'#f4f4f4',
                    fontSize: platform === "ios" ? 22 : 22,
                    marginBottom:4

                },
                note:{
                    color: '#f4f4f4'
                },
                infoNote:{
                    color: platform === "ios" ? '#059980': "#059980",
                    marginBottom: platform === "ios" ? 8 : 8,
                    fontWeight: platform === "ios" ? '600' : '400'
                },
                info:{
                    color: platform === "ios" ? '#222' : '#222',
                    marginBottom:16,
                    // fontWeight: contentFontWeight
                    fontWeight: platform === "ios" ? '600' : '400'
                }

            },
            line:{
                width:deviceWidth *.9,
                marginBottom:8
            }

        }
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
            color:'#222',
            marginTop: 5,
            marginBottom: 10,
            fontSize: 16,
            fontWeight:'600'
        },
        subTitleField:{
            marginTop: 10,
            color:"#059980",
            fontSize: 14,
        },
        addressSubField:{
            topField:{
                color:"#222",
                marginTop: 5,
                fontSize: 16,
                fontWeight:'600'
            },
            middleField:{
                color:"#222",
                marginTop: 2,
                marginBottom: 2,
                fontSize: 16,
                fontWeight:'600'
            },
            bottomField:{
                color:"#222",
                marginBottom: 20,
                fontSize: 16,
                fontWeight:'600'
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
        backgroundImage:{
            flex: 1,
            //position:'absolute',
            //top:0,
            //left:0,
            width: deviceWidth *1.1,
            height: deviceHeight *1.3,
            resizeMode: 'contain',
            marginTop:- deviceHeight*.175,
            alignSelf:'center',
            //backgroundColor: 'rgba(0,0,0,0.1)'
            opacity: 0.09

        },
        aboutView:{
            backgroundColor:'transparent',
            position:'absolute',
            top:20,
            marginLeft: deviceWidth * 0.04


        },
        aboutAppTitle:{
            color:'#006a54',
            fontSize: 18,
            fontWeight: 'bold',
        },
        versionAbout:{
            color:'#006a54',
            marginTop: 2,
            //fontSize: 12,
            fontWeight:'600'
        },
        aboutDescription:{
            fontSize: 14,
            width: deviceWidth * 0.9,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 20,
            fontWeight: '600'
        },
        contactInfoTitle:{
            //fontSize: 12,
            color:'#006a54',
            fontWeight: 'bold',
        },
        nameTitle:{
            fontSize: 16,
            marginBottom: 2,
            marginTop: 6,
            color: '#059980',
        },
        emailTitle:{
            fontSize: 18,
            marginBottom: 10,
            fontWeight:'600'
        },
        line:{
            marginBottom:3,
            borderBottomWidth:1.2
        },
        lastLine:{
            paddingBottom: taskbarPadding
        }

    },

    requests:{
        note:{
            color:'#059980',
            fontWeight: contentFontWeight
        },
        text:{
            color:'#222',
            fontWeight: contentFontWeight,
            marginBottom:5
        },
        icon:{
            color:'#53cbaf'
        },
        submitButton:{
            width: deviceWidth * 0.5,
            alignSelf:'center',
            backgroundColor: '#53cbaf',
            justifyContent:'center'
        }
    }


};

