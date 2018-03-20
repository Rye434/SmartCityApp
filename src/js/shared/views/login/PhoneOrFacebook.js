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
            <Image style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Image style={Style.image.icon} source={require('../../res/assets/img/smart-city-logo.png')}/>
                <Text style={Style.text.h1}>{Strings.PHONE_FACEBOOK_HEADER}</Text>
                <Text style={Style.text.h2}>{Strings.PHONE_FACEBOOK_MESSAGE}</Text>
                <View style={{width: dimension*.9}}>
                    <Button primary onPress={() => this.props.navigation.navigate(target)} title="facebookLogin" style={Style.button.loginButton}>
                        <Icon iconLeft name="logo-facebook" style={Style.button.icon}/>
                        <Text style={Style.button.textFacebook}>{Strings.BUTTONS_FACEBOOK}</Text>
                    </Button>
                    <View style={{flexDirection:'row', justifyContent:"center"}}>
                        <View style={Style.line}/><Text style={{fontSize:18, backgroundColor: 'rgba(0,0,0,0)', color:'#eee'}}>or</Text><View style={Style.line}/>
                    </View>
                    <Button light onPress={() => this.props.navigation.navigate('Phone')} title="phoneLogin" style={Style.button.loginButton}>
                        <Icon iconLeft name="keypad" style={Style.button.icon}/>
                        <Text style={[Style.button.textPhone, Style.theme.textPhone]}>{Strings.BUTTONS_PHONE}</Text>
                    </Button>
                    <Button transparent title="Login" onPress={() => this.props.navigation.navigate(target)} style={Style.button.loginButton2}>
                        <Text style={Style.text.loginText.already}>{Strings.LOGIN_ALREADY}</Text><Text style={Style.text.loginText.login}>
                        {Strings.LOGIN_LOGIN}
                        </Text>
                    </Button>
                </View>

            </View>
            </Image>
        )

    }
}