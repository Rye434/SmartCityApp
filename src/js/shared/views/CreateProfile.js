import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';
import Portfolio from "./Portfolio";
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import Phone from "./Phone";

let target;

export default class CreateProfile extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Portfolio"
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
        }
        return(
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>First Name</Label>
                        <Input/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Last Name</Label>
                        <Input/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Phone</Label>
                        <Input/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Password</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Confirm</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                    <Item>
                    <Button onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>Save</Text></Button>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}

