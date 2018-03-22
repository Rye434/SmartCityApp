import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Item, Input } from 'native-base';



var Strings = require('../res/strings/StringsEN.js');


export default class FeedbackContent extends Component {

    render() {
        return(
            <View>
                <TextInput placeholder='Type Feedback Here' onChange={()=>console.log("FeebackBox Inputted")} multiline={true} maxLength={1024} width={300}  height={400} autogrow={true}/>
                <Button><Text>{Strings.BUTTONS_SUBMIT}</Text></Button>
            </View>
        )

    }
}