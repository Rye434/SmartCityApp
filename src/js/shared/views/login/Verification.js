import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';


var Strings = require('../../res/strings/StringsEN.js');
var Style = require('../../res/assets/styles/Styles');
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default class Verification extends Component {

    render() {
        return(
            <ImageBackground style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
                <Header style={Style.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Phone')}>
                            <Icon name='arrow-back'/>
                            <Text style={{paddingLeft:16, paddingRight:0, width:100}}>Back</Text>
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('CreateProfile')}>
                            <Text>Next</Text>
                            <Icon name='arrow-forward'/>
                        </Button>
                    </Right>
                </Header>
            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">

                <Text style={Style.text.h1}>{Strings.VERIFICATION_HEADER}</Text>
                <Text style={Style.text.h2}>{Strings.VERIFICATION_MESSAGE}</Text>

                <Form style={{flex:0,width: 350, paddingTop:15, paddingBottom:15, flexDirection:'row', alignItems:'center'}}>
                    <Item inlineLabel style={{width:deviceWidth*0.8, alignSelf:'center'}}>
                        <Label style={{color:'#eee'}}>{Strings.FIELDS_CODE}</Label>
                        <Input keyboardType='numeric'/>
                    </Item>
                    {/*<Button onPress={() => this.props.navigation.navigate('CreateProfile')}><Text>{Strings.BUTTONS_CONFIRM}</Text></Button>*/}
                </Form>
                <Button transparent style={{alignSelf:'center',paddingTop: deviceHeight * .15, }}><Text>Didn't get a verification code?</Text></Button>
            </KeyboardAvoidingView>
            </ImageBackground>
        )

    }
}

