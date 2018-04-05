import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Item, Input } from 'native-base';


const Strings = require('../../res/strings/StringsEN.js');
const Styles = require('../../res/assets/styles/Styles.js');



export default class ProfileFields extends Component {

    render() {
        return(
            <View style={Styles.profileFields.textFields}>

                <Text style={Styles.profileFields.nameTextField}>will hold user value: name</Text>
                <Text style={Styles.profileFields.phoneNumberText}>{Strings.PROFILE_PHONE}</Text>
                <Text style={Styles.profileFields.subContentField}>phone#</Text>
                <Item/>

                <Text style={Styles.profileFields.subTitleField}>{Strings.PROFILE_EMAIL}</Text>
                <Text style={Styles.profileFields.subContentField}>Email Field</Text>
                <Item/>

                <Text style={Styles.profileFields.subTitleField}>{Strings.PROFILE_ADDRESS}</Text>
                <Text style={Styles.profileFields.addressSubField.topField}>Address Field</Text>
                <Text style={Styles.profileFields.addressSubField.middleField}>Address Field</Text>
                <Text style={Styles.profileFields.addressSubField.bottomField}>Address Field</Text>
                <Item style={{marginBottom:40,}}/>

            </View>
        )

    }
}