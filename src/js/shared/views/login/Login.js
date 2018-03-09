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

export default class Login extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Map"
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
        }
        return(
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Text>{Strings.LOGIN_PHONE}</Text>
                <Text>{Strings.LOGIN_MESSAGE}</Text>

                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_PHONE}</Label>
                        <Input/>
                    </Item>
                    <Item style={{marginLeft:0}}>
                        <Button  onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>{Strings.BUTTONS_VERIFY}</Text></Button>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}





