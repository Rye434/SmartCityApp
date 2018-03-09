import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import SubmissionDetails from "../../shared/components/submission/SubmissionDetails";
import * as actions from "../actions/Actions";
import {connect} from "react-redux";

var Strings = require('../res/strings/StringsEN.js');



//TODO: add issue submission confirmation alert




class SubmissionFlow extends Component {

    render() {

        return(
            <Content>
                <SubmissionDetails/>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return{
        imageSource: state.photoCached,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        cachePhoto: (obj) => {
            return dispatch(actions.cachePhoto(obj))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(SubmissionFlow)