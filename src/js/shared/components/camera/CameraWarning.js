import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';

var Strings = require('../../res/strings/StringsEN.js');


export default class CameraWarning extends Component {

    render() {

        return(
            <Content>
                    <Text>{Strings.CAMERA_WARNING}</Text>
                    <Text>{Strings.CAMERA_WARNING_MESSAGE}</Text>
                    <Button onPress={()=>this.props.navigation.navigate("CameraView")}><Text>{Strings.CAMERA_WARMING_BUTTON}</Text></Button>
            </Content>
        )
    }
}