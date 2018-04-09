import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';

var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let modalSpaceHeight;
let serviceName;
let serviceGroup;

let ackIcon;
let buttonText;

class MapModal extends Component {

    updateAck = () => {
        if (this.props.storeUserRequests.acknowledge.length > 0) {
            let inList = false;
            for (let item in this.props.storeUserRequests.acknowledge) {
                //if item is in ack list for user toggle to false on press
                if (this.props.currentRequest.requestId === item.requestId || this.props.currentRequest.requestIdOpen311 === item.requestIdOpen311) {
                    conosole.log(this.props.currentRequest.requestIdOpen311 + "  :  " + item.requestIdOpen311)
                    inList = true
                    this.props.toggleAck(this.props.responseCodeProfile.userId, false, item.requestIdOpen311, item.requestId)
                }
            }
            //if if loops through user ack list and request is not present, ack it
            if (inList == false) {
                this.props.toggleAck(this.props.responseCodeProfile.userId, true, item.requestIdOpen311, item.requestId)
            }
        }
        if (this.props.storeUserRequests.acknowledge.length === 0) {
            this.props.toggleAck(this.props.responseCodeProfile.userId, false, this.props.currentRequest.requestIdOpen311, this.props.currentRequest.requestId)
        }

    }

    render() {
        if(this.props.currentRequest != null) {
        //check if item in ack list for user then set checkbox button accordingly
        if (this.props.storeUserRequests.acknowledge.length > 0) {
            for (let item in this.props.storeUserRequests.acknowledge) {
                if (this.props.currentRequest.requestId === item.requestId || this.props.currentRequest.requestIdOpen311 === item.requestIdOpen311) {
                    ackIcon = Platform.OS == 'ios' ? "ios-checkbox-outline" : "md-checkbox-outline"
                }
            }
        }else {
            ackIcon = Platform.OS == 'ios' ? "ios-square-outline" : "md-square-outline"
        }

        if(this.props.currentRequest.requestId != null){
            buttonText = <Text>
                <Icon name={ackIcon}/>{Strings.DETAIL_MODAL_ACKNOWLEDGE} {this.props.detailRequest.acknowledgeCount}
            </Text>
        }
        if(this.props.currentRequest.requestId === null){
            buttonText = <Text>Cannot Acknowledge this Request</Text>
        }


            //console.log(this.props.currentRequest.info.serviceName)
            serviceName = this.props.currentRequest.info.serviceName
            serviceGroup = this.props.currentRequest.info.serviceGroup
        }


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
                    marginTop:modalSpaceHeight, backgroundColor:'white'}}>

                    <View style={{flexDirection:'row', marginTop:8, marginBottom:8}}>
                    <Thumbnail square large source={{uri: 'http://via.placeholder.com/80x80'}} style={Styles.map.mapModal.thumbnail} />

                        <View style={Styles.map.mapModal.textView}>
                        <Text style={Styles.map.mapModal.text.title}>{serviceGroup}</Text>
                        <Text note style={Styles.map.mapModal.text.note}>{serviceName}</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Button block title={"moreInfo"}
                                onPress={this.props.toggleModals}
                                style={Styles.map.mapModal.buttons.moreInfo}>
                            <Text>{Strings.MAP_MODAL_MORE_INFO_BUTTON}</Text>
                        </Button>
                        <Button block success title={"acknowledge"}//change to warning on press
                                onPress={this.updateAck}
                                style={Styles.map.mapModal.buttons.plusOne}>
                            {buttonText}
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
        currentRequest: state.currentRequest,
        responseCodeProfile: state.responseCodeProfile,
        storeUserRequests: state.storeUserRequests
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