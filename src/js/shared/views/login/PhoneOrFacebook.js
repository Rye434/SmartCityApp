import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';

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

            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={Style.text.h1}>{Strings.PHONE_FACEBOOK_HEADER}</Text>
                <Text style={Style.text.h2}>{Strings.PHONE_FACEBOOK_MESSAGE}</Text>
                <View style={{width: dimension*.9}}>
                    <Button primary onPress={() => this.props.navigation.navigate(target)} title="facebookLogin" style={Style.loginButton}><Text style={Style.loginButton.text}> <Icon name="logo-facebook" style={Style.loginButton.icon}/> {Strings.BUTTONS_FACEBOOK}</Text></Button>
                    <View style={{flexDirection:'row', justifyContent:"center"}}>
                        <View style={Style.line}></View><Text>or</Text><View style={Style.line}></View>
                    </View>
                    <Button success onPress={() => this.props.navigation.navigate('CreateProfile')} title="phoneLogin" style={Style.loginButton}><Text style={Style.loginButton.text}><Icon name="keypad" style={Style.loginButton.icon} ></Icon>{Strings.BUTTONS_PHONE}</Text></Button>
                </View>
            </View>
        )

    }
}