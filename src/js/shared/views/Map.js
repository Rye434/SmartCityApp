import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, ActionSheet } from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import FabButton from "../../android/FabButton";
import IssueMap from "../components/map/IssueMap";
import AddressSearch from "../components/map/AddressSearch";
import {connect} from "react-redux";
import * as actions from "../actions/Actions";

var Strings = require('../res/strings/StringsEN.js');

let footer;
let fab;
let header;

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 7;
var CANCEL_INDEX = 4;

class Map extends Component {

    openActionSheet = () => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: Strings.HEADER_FILTER
            },
            buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            }
        )
    }


    render() {
        if(Platform.OS == "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Map'}/>
            header = <HeaderIos title={Strings.APP_TITLE} buttonClickRight={this.openActionSheet}
                                targetTextRight={Strings.HEADER_FILTER}/>
        }
        if(Platform.OS == "android" && this.props.mapModal == false){
            fab = <FabButton navigation={this.props.navigation}/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("DrawerOpen")} title={Strings.APP_TITLE}
                                   targetTextRight={<Icon name='funnel' style={{color:'white'}}/>}
                                   buttonClickRight={this.openActionSheet}
                                   headerIcon={'menu'}/>
        }
        if(Platform.OS == "android" && this.props.mapModal == true){
            fab = null;
        }

        return(
            <Container>
                {header}
                <Content>
                    <AddressSearch/>
                    <IssueMap/>
                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}



function mapStateToProps(state) {
    return{
        mapModal: state.mapModal,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {

    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Map)
