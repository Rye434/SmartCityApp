import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem} from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import HeaderIos from "../../ios/Header.ios";
import FabButton from "../../android/FabButton";
import RequestDetail from "../components/requests/RequestDetail";
import * as actions from "../actions/Actions";
import {connect} from "react-redux";


var Strings = require('../res/strings/StringsEN.js');

let footer;
let fab;
let header;


class RequestListDetail extends Component {

    render() {
        if(Platform.OS == "ios"){
            header = <HeaderIos title={'adsasd'} targetTextLeft={Strings.HEADER_RETURN}
                                buttonClickLeft={() => this.props.navigation.navigate("Requests")}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("Requests")}
                                   title={'adsasd'} headerIcon={'arrow-back'}/>
        }
        return(
            <Container>
                {header}
                <Content>
                    <RequestDetail/>



                </Content>
                {footer}
            </Container>
        )

    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        modalVisible: () => {
            return dispatch(actions.editModal(true))
        }
    }
}




export default connect(mapStateToProps,mapDistpatchToProps)(RequestListDetail)