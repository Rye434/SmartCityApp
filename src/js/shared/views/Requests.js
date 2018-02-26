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
let header;

export default class Requests extends Component {

    render() {
        if(Platform.OS === "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Requests'}/>
            header = <HeaderIos title="Requests"  targetTextRight={"Profile"} buttonClickRight={() => this.props.navigation.navigate("Profile")}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("DrawerOpen")} title="Requests" tabs={false}/>
        }
        return(
            <Container>
                {header}
                <Content>
                   <Text>History</Text>
                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}


