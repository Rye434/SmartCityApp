import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
// import {StyleProvider, Container, Header, Body, Title, Content} from 'native-base';
import {  StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';


//width: Dimensions.get('window').width*.8
var Strings = require('../../res/strings/StringsEN.js');

var dimens = Dimensions.get('window').width;
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

        <View style={{flex:1, marginTop:16, }}>
            <Button transparent><Text>Back</Text></Button>
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', alignItems:'center'}} behavior="padding">
                <Form style={{flex:0,width: dimens*.84, alignItems:'flex-start'}}>
                    <View style={{flexDirection:'row'}}>
                    <Item floatingLabel style={{flex:50, marginLeft:0, flexDirection:'row'}}>
                        <Label>{Strings.FIELDS_FIRST_NAME}</Label>
                        <Input onChange={()=>console.log("First-Name")}/>
                    </Item>
                    <Item floatingLabel style={{flex:50, marginLeft:0}}>
                        <Label>{Strings.FIELDS_LAST_NAME}</Label>
                        <Input onChange={()=>console.log("LastName")}/>
                    </Item>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Item floatingLabel keyboardType='email-address' style={{width:dimens*.84, marginLeft:0}}>
                        <Label>{Strings.FIELDS_EMAIL}</Label>
                        <Input onChange={()=>console.log("Email")}/>
                    </Item>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Item floatingLabel style={{flex:70, marginLeft:0}}>
                        <Label>{Strings.FIELDS_ADDRESS}</Label>
                        <Input onChange={()=>console.log("Address")}/>
                    </Item>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Item floatingLabel style={{flex:50, marginLeft:0}}>
                        <Label>{Strings.FIELDS_ADDRESS_LINE2}</Label>
                        <Input onChange={()=>console.log("AddressLine")}/>
                    </Item>
                    <Item floatingLabel style={{flex:50, marginLeft:0}}>
                        <Label>{Strings.FIELDS_CITY}</Label>
                        <Input onChange={()=>console.log("City")}/>
                    </Item>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Item floatingLabel style={{flex:50, marginLeft:0}}>
                        <Label>{Strings.FIELDS_PROVINCE}</Label>
                        <Input onChange={()=>console.log("Postal")}/>
                    </Item>

                    <Item floatingLabel style={{flex:50, marginLeft:0}}>
                        <Label>{Strings.FIELDS_POSTAL}</Label>
                        <Input onChange={()=>console.log("Province")}/>
                    </Item>
                    </View>

                    <Item floatingLabel style={{width: dimens*.84, marginLeft:0}}>
                        <Label>{Strings.FIELDS_COUNTRY}</Label>
                        <Input onChange={()=>console.log("Country")}/>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
            <View style={{marginBottom:20, justifyContent:'center', alignItems:'center'}}>
                <Item >
                    <Button onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>{Strings.BUTTONS_SAVE}</Text></Button>
                </Item>
            </View>
        </View>

        )

    }
}

