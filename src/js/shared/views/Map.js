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
let header;

export default class Map extends Component {

    render() {
        if(Platform.OS == "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Map'}/>
            header = <HeaderIos title="Map"/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("DrawerOpen")} title="Map" tabs={false}/>
        }

        return(
            <Container>
                {header}
                <Content>
                    <Text>Map</Text>

                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}


