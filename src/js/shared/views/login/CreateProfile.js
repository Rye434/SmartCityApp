import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';


var Strings = require('../../res/strings/StringsEN.js');


let target;

export default class CreateProfile extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Map"
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
        }
        return(
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_FIRST_NAME}</Label>
                        <Input onChange={()=>console.log("First-Name")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_LAST_NAME}</Label>
                        <Input onChange={()=>console.log("LastName")}/>
                    </Item>
                    <Item fixedLabel keyboardType='phone-pad' style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_PHONE}</Label>
                        <Input onChange={()=>console.log("Phone")}/>
                    </Item>
                    <Item fixedLabel keyboardType='email-address' style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_EMAIL}</Label>
                        <Input onChange={()=>console.log("Email")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_ADDRESS}</Label>
                        <Input onChange={()=>console.log("Address")}/>
                    </Item>
                    <Item inlineLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_ADDRESS_LINE2}</Label>
                        <Input onChange={()=>console.log("AddressLine")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_POSTAL}</Label>
                        <Input onChange={()=>console.log("Postal")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_CITY}</Label>
                        <Input onChange={()=>console.log("City")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_PROVINCE}</Label>
                        <Input onChange={()=>console.log("Province")}/>
                    </Item>
                    <Item fixedLabel style={{width:300, marginLeft:0}}>
                        <Label>{Strings.FIELDS_COUNTRY}</Label>
                        <Input onChange={()=>console.log("Country")}/>
                    </Item>
                    <Item>
                    <Button onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>{Strings.BUTTONS_SAVE}</Text></Button>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
        )

    }
}

