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

                <Text>will hold user value: name</Text>
                <Text>{Strings.PROFILE_PHONE}</Text>
                <Text>will hold user value: phone</Text>
                <Item></Item>

                <Text>{Strings.PROFILE_EMAIL}</Text>
                <Text>will hold user value: email</Text>
                <Item></Item>

                <Text>{Strings.PROFILE_ADDRESS}</Text>
                <Text>will hold user value: Address Field</Text>
                <Text>will hold user value: Address Field</Text>
                <Text>will hold user value: Address Field</Text>
                <Item></Item>

            </View>
        )

    }
}