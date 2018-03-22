import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem} from 'native-base';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";


var Strings = require('../../res/strings/StringsEN.js');



class RequestDetail extends Component {

    render() {
        return(
            <View>
                <Text>Build Dis</Text>
            </View>
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




export default connect(mapStateToProps,mapDistpatchToProps)(RequestDetail)