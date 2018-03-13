import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';

var Strings = require('../../res/strings/StringsEN.js');


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

            <View>
                <Text>{Strings.PHONE_FACEBOOK_HEADER}</Text>
                <Text>{Strings.PHONE_FACEBOOK_MESSAGE}</Text>
                <Button  onPress={() => this.props.navigation.navigate('CreateProfile')} style={{marginTop:24}}><Icon name="keypad" ></Icon><Text>{Strings.BUTTONS_PHONE}</Text></Button>
                <Button  onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text> <Icon name="logo-facebook" style={{color:'white'}}/> {Strings.BUTTONS_FACEBOOK}</Text></Button>
            </View>
        )

    }
}