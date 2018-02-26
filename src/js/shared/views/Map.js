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

export default class Map extends Component {

    render() {
        if(Platform.OS == "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Map'}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
        }

        return(
            <Container>
                <Content>
                    <Text>Mapppp</Text>

                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}

if(Platform.OS == "android") {
    Map.navigationOptions = ({navigation}) => ({
        header: <HeaderAndroid buttonClick={() => navigation.navigate("DrawerOpen")} title="Map"/>
    });
}

if(Platform.OS == "ios") {
    Map.navigationOptions = ({navigation}) => ({
        header: <HeaderIos title="Map"/>
    });
}