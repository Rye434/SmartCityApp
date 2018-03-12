import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Item, Input } from 'native-base';


var Strings = require('../../res/strings/StringsEN.js');



export default class ProfileFields extends Component {

    render() {
        return(
            <View>

                <Text>Name</Text>
                <Text>{Strings.PROFILE_PHONE}</Text>
                <Text>phone#</Text>
                <Item/>

                <Text>{Strings.PROFILE_EMAIL}</Text>
                <Text>Email Field</Text>
                <Item/>

                <Text>{Strings.PROFILE_ADDRESS}</Text>
                <Text>Address Field</Text>
                <Text>Address Field</Text>
                <Text>Address Field</Text>
                <Item/>

            </View>
        )

    }
}