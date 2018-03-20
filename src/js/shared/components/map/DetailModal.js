import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions";
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment, Item } from 'native-base';

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

                <Image source={{uri: 'http://via.placeholder.com/350x350'}}  style={{height: 350, width: 350}}></Image>

                <View>
                    <Text>Pothole</Text>
                    <Text note>219 Laurier Ave W, Ottawa ON K1P</Text>
                </View>
                <Button><Text>{Strings.DETAIL_MODAL_ACKNOWLEDGE}109</Text></Button>

                <Text>{Strings.DETAIL_MODAL_DATE}</Text>
                <Text>2018-02-19</Text>
                <Item/>
                <Text>{Strings.DETAIL_MODAL_DISTANCE}</Text>
                <Text>340M</Text>
                <Item/>
                <Text>{Strings.DETAIL_MODAL_STATUS}</Text>
                <Text>Open</Text>
                <Item/>
                <Text>{Strings.DETAIL_MODAL_DESCRIPTION}</Text>
                <Text>Fire Hydrant Obstruction - Car has been parked in front for several hours.</Text>
                <Item/>
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