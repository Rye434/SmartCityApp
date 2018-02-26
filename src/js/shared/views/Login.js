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
                <Image source={{uri: 'http://via.placeholder.com/150x150'}} style={{height: 150, width: 150,flex:0}}/>
                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Phone</Label>
                        <Input/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>Password</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                    <Item style={{marginLeft:0}}>
                        <Button  onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>Login</Text></Button>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}





