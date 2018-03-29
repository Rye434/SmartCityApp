import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Item, } from 'native-base';

var MPLogo = require('../res/assets/img/MissingPixelLogo.png');
var Strings = require('../res/strings/StringsEN.js');
var Styles = require('../res/assets/styles/Styles');


export default class AboutContent extends Component {

    render() {
        return(
            <ImageBackground source={MPLogo} style={Styles.aboutContent.aboutView}>
            <View>
                <Text style={Styles.aboutContent.aboutAppTitle}>{Strings.ABOUT_TITLE}</Text>
                <Text style={Styles.aboutContent.versionAbout}>{Strings.ABOUT_VERSION}</Text>
                <Text style={Styles.aboutContent.aboutDescription}>{Strings.ABOUT_DESCRIPTION}</Text>
                <Text style={Styles.aboutContent.contactInfoTitle}>{Strings.ABOUT_CONTACT}</Text>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_ALISON_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_ALISON_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_JACOB_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_JACOB_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_MICHEL_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_MICHEL_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_RILEY_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_RILEY_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_ROBSON_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_ROBSON_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_YANMING_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_YANMING_EMAIL}</Text>
                <Item/>
                <Text style={Styles.aboutContent.nameTitle}>{Strings.ABOUT_ZAHEED_NAME}</Text>
                <Text style={Styles.aboutContent.emailTitle}>{Strings.ABOUT_ZAHEED_EMAIL}</Text>
                <Item/>
            </View>
            </ImageBackground>
        )

    }
}