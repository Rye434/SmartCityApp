import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import FabButton from "../../android/FabButton";


let footer;
let fab;

export default class Profile extends Component {

    render() {
        if(Platform.OS == "ios"){
            footer = <FooterIos navigation={this.props.navigation}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
        }
        return(
            <Container>
                <Content>
                <Text>Profile</Text>
                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}

if(Platform.OS == "android") {
    Profile.navigationOptions = ({navigation}) => ({
        header: <HeaderAndroid buttonClick={() => navigation.navigate("DrawerOpen")} title="Profile" tabs={true}/>
    });
}

if(Platform.OS == "ios") {
    Profile.navigationOptions = ({navigation}) => ({
        header: <HeaderIos title="Profile" tabs={true}/>
    });
}