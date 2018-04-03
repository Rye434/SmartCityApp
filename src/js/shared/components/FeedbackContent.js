import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Item, Input } from 'native-base';



var Strings = require('../res/strings/StringsEN.js');
var Styles = require('../res/assets/styles/Styles');


export default class FeedbackContent extends Component {

    render() {
        return(
            <View>
                <TextInput style={Styles.feedbackContent.userInputField} placeholder='Type Feedback Here' onChange={()=>console.log("FeebackBox Inputted")} multiline={true} maxLength={1024} width={300}  height={400} autogrow={true}/>
                <Button style={Styles.feedbackContent.submitButton}><Text style={Styles.feedbackContent.submitButtonText}>{Strings.BUTTONS_SUBMIT}</Text></Button>
            </View>
        )

    }
}