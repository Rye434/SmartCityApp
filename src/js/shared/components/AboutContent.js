import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem } from 'native-base';



var Strings = require('../res/strings/StringsEN.js');


export default class AboutContent extends Component {

    render() {
        return(
            <View>
                <Text>About</Text>
            </View>
        )

    }
}