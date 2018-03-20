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
var Style = require('../../res/assets/styles/Styles');


export default class Verification extends Component {

    render() {
        return(
            <Image style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Text>verification.js</Text>
                <Text>{Strings.VERIFICATION_HEADER}</Text>
                <Text>{Strings.VERIFICATION_MESSAGE}</Text>

                <Form style={{flex:0,width: 350, paddingTop:88, paddingBottom:48, flexDirection:'row'}}>
                    <Item inlineLabel style={{width:250}}>
                        <Label>{Strings.FIELDS_CODE}</Label>
                        <Input keyboardType='numeric'/>
                    </Item>
                    <Button onPress={() => this.props.navigation.navigate('CreateProfile')}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>
                </Form>
                <Button><Text>Didn't get a verification code?</Text></Button>
            </KeyboardAvoidingView>
            </Image>
        )

    }
}

