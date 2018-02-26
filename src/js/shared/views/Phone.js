import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";

var Strings = require('../res/strings/StringsEN.js');


let target;
let userExists = true; //for testing login flow, use True/False values

export default class Phone extends Component {

    render() {
        if(userExists == true){
            target = "Login"
        }
        if(userExists == false){
            target = "Verification"
        }
        return(
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Image source={{uri: 'http://via.placeholder.com/350x350'}} style={{height: 350, width: 350,flex:0}}/>

                <Form style={{flex:0,width: 350, paddingTop:24, paddingBottom:48, flexDirection:'row',marginLeft:0}}>
                    <Item inlineLabel style={{width:250}}>
                        <Label>{Strings.FIELDS_PHONE}</Label>
                        <Input keyboardType='numeric'/>
                    </Item>
                    <Button style={{marginLeft:0}} onPress={() => this.props.navigation.navigate(target)}><Text>{Strings.BUTTONS_VERIFY}</Text></Button>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}
