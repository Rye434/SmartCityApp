import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
    Dimensions,
    Text
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, Input, Label, Form, Item } from 'native-base';


var Strings = require('../../res/strings/StringsEN.js');
var Style = require('../../res/assets/styles/Styles');
var dimension = Dimensions.get('window').width;

let target;

export default class PhoneOrFacebook extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Map"
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
        }

        return(
           <ImageBackground style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Image style={Style.image.icon} source={require('../../res/assets/img/app-icon-sign-up.png')}/>
                <Text style={Style.text.loginH1}>{Strings.PHONE_FACEBOOK_HEADER}</Text>
                <Text style={Style.text.h2}>{Strings.PHONE_FACEBOOK_MESSAGE}</Text>
                <View style={{width: dimension*.9}}>
                    <Button light onPress={() => this.props.navigation.navigate('Phone')} title="phoneLogin" style={Style.button.loginButton.phoneButton}>
                        {/*<Icon iconLeft name="keypad" style={Style.button.loginButton.iconPhone}/>*/}
                        <Text style={[Style.button.loginButton.textPhone, Style.theme.textPhone]}>{Strings.BUTTONS_PHONE}</Text>
                    </Button>
                    <View style={{flexDirection:'row', justifyContent:"center"}}>
                        <View style={Style.line}/><Text style={{fontSize:18, backgroundColor: 'rgba(0,0,0,0)', color:'#eee'}}>or</Text><View style={Style.line}/>
                    </View>
                    <Button primary onPress={() => this.props.navigation.navigate(target)} title="facebookLogin" style={Style.button.loginButton.button}>
                        <Icon iconLeft name="logo-facebook" style={Style.button.loginButton.iconFacebook}/>
                        <Text style={Style.button.loginButton.textFacebook}>{Strings.BUTTONS_FACEBOOK}</Text>
                    </Button>

                    <Button transparent title="Login" onPress={() => this.props.navigation.navigate(target)} style={Style.button.loginButton2}>
                        <Text style={Style.text.loginText.already}>{Strings.LOGIN_ALREADY}</Text><Text style={Style.text.loginText.login}>
                        {Strings.LOGIN_LOGIN}
                        </Text>
                    </Button>
                </View>

            </View>
           </ImageBackground>
        )

    }
}