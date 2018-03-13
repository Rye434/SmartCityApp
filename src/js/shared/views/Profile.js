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
import ProfileEditModal from "../components/profile/ProfileEditModal"
import * as actions from "../actions/Actions";
import {connect} from "react-redux";
import ProfileFields from "../components/profile/ProfileFields";

var Strings = require('../res/strings/StringsEN.js');

let footer;
let fab;
let header;

class Profile extends Component {

    render() {
        if(Platform.OS == "ios"){
            header = <HeaderIos title={Strings.PAGE_HEADERS_PROFILE} targetTextLeft={Strings.HEADER_RETURN}
                                buttonClickLeft={() => this.props.navigation.navigate("Requests")}
                                buttonClickRight={()=> this.props.modalVisible()} targetTextRight={Strings.HEADER_EDIT}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("DrawerOpen")}
                                   title={Strings.PAGE_HEADERS_PROFILE} tabs={false}
                                   buttonClickRight={()=> this.props.modalVisible()} targetTextRight={Strings.HEADER_EDIT}/>
        }
        return(
            <Container>
                {header}
                <Content>

                    <ProfileEditModal/>

                    <ProfileFields/>


                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate("About")}>
                            <Text>{Strings.PAGE_HEADERS_ABOUT}</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate("Feedback")}>
                            <Text>{Strings.PAGE_HEADERS_FEEDBACK}</Text>
                        </ListItem>
                    </List>

                </Content>
                {footer}
            </Container>
        )

    }
}

function mapStateToProps(state) {
    return{

    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        modalVisible: () => {
            return dispatch(actions.editModal(true))
        }
        }
}




export default connect(mapStateToProps,mapDistpatchToProps)(Profile)

