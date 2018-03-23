import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';

var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let modalSpaceHeight;


class MapModal extends Component {

    render() {

        if(Platform.OS == 'android'){
            if(Dimensions.get('window').height<=700) {
                modalSpaceHeight = Dimensions.get('window').height-168
            }
            if(Dimensions.get('window').height>700) {
                modalSpaceHeight = Dimensions.get('window').height-168
            }

        }
        if(Platform.OS == 'ios'){
            if(Dimensions.get('window').height<=700) {
                modalSpaceHeight = Dimensions.get('window').height-199
            }
            if(Dimensions.get('window').height>700) {
                modalSpaceHeight = Dimensions.get('window').height-199
            }
        }

        return (
            <Modal
                visible={this.props.mapModal}
                animationType={'slide'}
                onRequestClose={this.props.showMapModal}
                transparent={true}>
                <TouchableOpacity onPress={this.props.showMapModal}>

                    <TouchableWithoutFeedback>
                <View style={{height:144, width:Dimensions.get('window').width,
                    marginTop:modalSpaceHeight,alignItems: 'center', backgroundColor:'white'}}>

                    <View style={{flexDirection:'row', marginTop:8, marginBottom:8}}>
                    <Thumbnail square large source={{uri: 'http://via.placeholder.com/80x80'}} />

                        <View style={{flexDirection:'column'}}>
                        <Text>Place Holder</Text>
                        <Text note>Will be server response</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Button block info
                                onPress={this.props.toggleModals}
                                style={Styles.mapModal.buttons.moreInfo}>
                            <Text>{Strings.MAP_MODAL_MORE_INFO_BUTTON}</Text>
                        </Button>
                        <Button block success //change to warning on press
                                // onPress={this.props.showMapModal}
                                style={Styles.mapModal.buttons.plusOne}>
                            <Text>{Strings.MAP_MODAL_ACKNOWLEDGE}</Text>
                        </Button>
                    </View>

                </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>


            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return{
        mapModal: state.mapModal,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        showMapModal: () => {
            return dispatch(actions.mapModal(false))
        },
        showDetailModal: () => {
            return dispatch(actions.detailModal(true))
        },
        toggleModals: () => {
            return dispatch(actions.toggleModals())
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(MapModal)