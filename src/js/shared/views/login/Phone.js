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


var Strings = require('../../res/strings/StringsEN.js');


let target;
let userExists = false; //for testing login flow, use True/False values

//TODO

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
                        <Input keyboardType='phone-pad' onChange={()=>console.log("Phone")}/>
                    </Item>
                    <Button style={{marginLeft:0}} onPress={() => this.props.navigation.navigate(target)}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}
