import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Item } from 'native-base';



var Strings = require('../res/strings/StringsEN.js');


export default class AboutContent extends Component {

    render() {
        return(
            <View>
                <Text>{Strings.ABOUT_TITLE}</Text>
                <Text>{Strings.ABOUT_VERSION}</Text>
                <Text>{Strings.ABOUT_DESCRIPTION}</Text>
                <Text>{Strings.ABOUT_CONTACT}</Text>
                <Text>{Strings.ABOUT_ALISON_NAME}</Text>
                <Text>{Strings.ABOUT_ALISON_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_JACOB_NAME}</Text>
                <Text>{Strings.ABOUT_JACOB_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_MICHEL_NAME}</Text>
                <Text>{Strings.ABOUT_MICHEL_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_RILEY_NAME}</Text>
                <Text>{Strings.ABOUT_RILEY_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_ROBSON_NAME}</Text>
                <Text>{Strings.ABOUT_ROBSON_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_YANMING_NAME}</Text>
                <Text>{Strings.ABOUT_YANMING_EMAIL}</Text>
                <Item/>
                <Text>{Strings.ABOUT_ZAHEED_NAME}</Text>
                <Text>{Strings.ABOUT_ZAHEED_EMAIL}</Text>
                <Item/>
            </View>
        )

    }
}