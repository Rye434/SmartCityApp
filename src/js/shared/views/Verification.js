import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';

import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import Phone from "./Phone";

var Strings = require('../res/strings/StringsEN.js');



export default class Verification extends Component {

    render() {
        return(
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Image source={{uri: 'http://via.placeholder.com/150x150'}} style={{height: 150, width: 150,flex:0}}/>

                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'row'}}>
                    <Item inlineLabel style={{width:250}}>
                        <Label>{Strings.FIELDS_CODE}</Label>
                        <Input keyboardType='numeric'/>
                    </Item>
                    <Button onPress={() => this.props.navigation.navigate('CreateProfile')}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}

