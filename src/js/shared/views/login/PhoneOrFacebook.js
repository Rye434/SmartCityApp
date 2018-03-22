import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    Dimensions,
    Text
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, Input, Label, Form, Item } from 'native-base';

var Strings = require('../../res/strings/StringsEN.js');
var Style = require('../../res/assets/styles/Styles');
var dimension = Dimensions.get('window').width;

let target;
let imgSrc;

export default class PhoneOrFacebook extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Map"
            imgSrc = (require('../../res/assets/img/smart-city-gradient.png'))
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
            imgSrc = {uri:"smartcitygradient"}
        }

        return(
            <Image style={Style.loginBackgroundImage} source={imgSrc}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={Style.text.h1}>{Strings.PHONE_FACEBOOK_HEADER}</Text>
                <Text style={Style.text.h2}>{Strings.PHONE_FACEBOOK_MESSAGE}</Text>
                <View style={{width: dimension*.9}}>
                    <Button primary onPress={() => this.props.navigation.navigate(target)} title="facebookLogin" style={Style.loginButton}>
                        <Icon iconLeft name="logo-facebook" style={Style.loginButton.icon}/>
                        <Text style={Style.loginButton.text}>{Strings.BUTTONS_FACEBOOK}</Text>
                    </Button>
                    <View style={{flexDirection:'row', justifyContent:"center"}}>
                        <View style={Style.line}/><Text style={{fontSize:18}}>or</Text><View style={Style.line}/>
                    </View>
                    <Button success onPress={() => this.props.navigation.navigate('Phone')} title="phoneLogin" style={Style.loginButton}>
                        <Icon iconLeft name="keypad" style={Style.loginButton.icon}/>
                        <Text style={Style.loginButton.text}>{Strings.BUTTONS_PHONE}</Text>
                    </Button>
                </View>
            </View>
            </Image>
        )

    }
}