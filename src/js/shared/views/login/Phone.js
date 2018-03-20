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
var Style = require('../../res/assets/styles/Styles');

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
            <Image style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
                <Button transparent>
                    <Text>Back</Text>
                </Button>

            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Text style={Style.text.h1}>{Strings.LOGIN_PHONE}</Text>
                <Text style={Style.text.h2}>{Strings.LOGIN_MESSAGE}</Text>
                <Form style={{flex:0,width: 350, paddingTop:24, paddingBottom:48, flexDirection:'row',marginLeft:0}}>
                    <View  style={Style.view.input}>
                        {/*<Text>{Strings.FIELDS_PHONE}</Text>*/}
                        <Input keyboardType='phone-pad' onChange={()=>console.log("Phone")} style={Style.view.input}/>
                    </View >
                    <Button style={{marginLeft:0}} onPress={() => this.props.navigation.navigate(target)}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>
                </Form>
            </KeyboardAvoidingView>
            </Image>
        )

    }
}
