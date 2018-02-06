import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Thumbnail, List, ListItem } from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import FabButton from "../../android/FabButton";

let footer;
let fab;

export default class Requests extends Component {

    render() {
        if(Platform.OS === "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Requests'}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
        }
        return(
            <Container>
                <Content>
                   <Text>History</Text>
                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}

if(Platform.OS === "android") {
    Requests.navigationOptions = ({navigation}) => ({
        header: <HeaderAndroid buttonClick={() => navigation.navigate("DrawerOpen")} title="Requests"/>
    });
}

if(Platform.OS === "ios") {
    Requests.navigationOptions = ({navigation}) => ({
        header: <HeaderIos title="Requests"/>
    });
}