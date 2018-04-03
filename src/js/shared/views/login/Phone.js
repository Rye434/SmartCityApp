import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ImageBackground,
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
            target = "Map"
        }
        if(userExists == false){
            target = "Verification"
        }
        return(
            <ImageBackground style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>

                <Header style={Style.header}>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.navigate('PhoneOrFacebook')}>
                            <Icon name='arrow-back' />
                            <Text style={{paddingLeft:16, paddingRight:0, width:100}}>Back</Text>

                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.props.navigation.navigate(target)}>
                            <Text>Next</Text>
                            <Icon name='arrow-forward' />
                        </Button>
                    </Right>
                </Header>



            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Text style={Style.text.h1}>{Strings.LOGIN_PHONE}</Text>
                <Text style={Style.text.h2}>{Strings.LOGIN_MESSAGE}</Text>
                <Form style={{flex:0,width: 350, paddingTop:24, paddingBottom:48, alignItems:'center',flexDirection:'column',marginLeft:0}}>
                    <View  style={Style.view.input}>
                        <Label style={Style.view.profileLabelText}>{Strings.FIELDS_COUNTRY}</Label>
                        <Input keyboardType='phone-pad' onChange={()=>console.log("Phone")} placeholder="+1" placeholderTextColor='#888' />
                    </View>
                    <View  style={Style.view.input}>
                        <Text style={Style.view.profileLabelText}>{Strings.FIELDS_NUMBER}</Text>
                        <Input keyboardType='phone-pad' onChange={()=>console.log("Phone")} placeholder="Required" placeholderTextColor='#888'/>
                    </View >
                    {/*<Button style={{marginLeft:0}} onPress={() => this.props.navigation.navigate(target)}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>*/}
                </Form>
            </KeyboardAvoidingView>
            </ImageBackground>
        )

    }
}
