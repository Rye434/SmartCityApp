import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions";
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';

var Strings = require('../../res/strings/StringsEN');

let arrow;


class DetailModal extends Component {

    render() {

        if(Platform.OS == 'android'){
           arrow = <Icon name='arrow-back'/>
        }
        if(Platform.OS == 'ios'){
            arrow = <Icon name='arrow-down'/>
        }

        return (
            <Modal
                visible={this.props.detailModal}
                animationType={'slide'}
                onRequestClose={this.props.showDetailModal}>
                <Button transparent onPress={this.props.showDetailModal}>{arrow}</Button>





            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return{
        detailModal: state.detailModal,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        showDetailModal: () => {
            return dispatch(actions.detailModal(false))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(DetailModal)