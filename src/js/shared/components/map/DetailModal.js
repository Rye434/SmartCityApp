import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ScrollView} from 'react-native';
import * as actions from "../../../shared/actions/Actions";
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment, Item } from 'native-base';

var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let arrow;

let serviceName;
let serviceGroup;
let dateSubmitted;
let description;
let status;
let distance;
let address;

let ackIcon;
let buttonText;


class DetailModal extends Component {

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
        if (this.props.storeUserRequests != null && this.props.currentRequest != null){
        //check if item in ack list for user then set checkbox button accordingly
            if (this.props.storeUserRequests.acknowledge.length > 0) {
                for (let item in this.props.storeUserRequests.acknowledge) {
                    if (this.props.currentRequest.requestId === item.requestId || this.props.currentRequest.requestIdOpen311 === item.requestIdOpen311) {
                        ackIcon = Platform.OS == 'ios' ? "ios-checkbox-outline" : "md-checkbox-outline"
                    }
                }
            } else {
                ackIcon = Platform.OS == 'ios' ? "ios-square-outline" : "md-square-outline"
            }

        if (this.props.currentRequest.requestId != null) {
            buttonText = <Text>
                <Icon name={ackIcon}/>{Strings.DETAIL_MODAL_ACKNOWLEDGE} {this.props.currentRequest.acknowledgeCount}
            </Text>
        }
        if (this.props.currentRequest.requestId === null) {
            buttonText = <Text>Cannot Acknowledge this Request</Text>
        }
        }

        if(Platform.OS == 'android'){
           arrow = <Icon name='arrow-back'/>
        }
        if(Platform.OS == 'ios'){
            arrow = <Icon name='arrow-down' style={{fontSize:40, color:'#f4f4f4'}}/>
        }

        if(this.props.currentRequest != null) {
            serviceName = this.props.currentRequest.info.serviceName
            serviceGroup = this.props.currentRequest.info.serviceGroup
            dateSubmitted = this.props.currentRequest.info.dateSubmitted.substr(0,11)
            description = this.props.currentRequest.info.description
            status = this.props.currentRequest.info.status
            address = this.props.currentRequest.info.address.split(" ").slice(2).join(" ")

            for(var request in this.props.storeRequests.list){
                if(this.props.storeRequests.list[request].requestIdOpen311 == this.props.currentRequest.info.requestIdOpen311){
                    distance = this.props.storeRequests.list[request].distance
                }
            }

        }


        return (
            <Modal
                visible={this.props.detailModal}
                animationType={'slide'}
                onRequestClose={this.props.showDetailModal}>

                <ScrollView style={{flexDirection:'column'}}>
                <Image source={{uri: 'http://via.placeholder.com/250x500'}}  style={{height: 250, width: 500}}>
                    <Button transparent onPress={this.props.showDetailModal} style={Styles.map.detailModal.backButton}>
                        {arrow}
                    </Button>
                </Image>

                <View style={Styles.map.detailModal.infoView}>
                    <Text style ={Styles.map.detailModal.text.header}>{serviceName}</Text>
                    <Text note style ={Styles.map.detailModal.text.note}>{address}</Text>


                </View>

                    <Button block title="acknowledge" style={Styles.map.detailModal.plusOne} onPress={this.updateAck}>
                        {buttonText}
                    </Button>


                <View style={Styles.map.detailModal.detailView}>
                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DATE}</Text>
                <Text style={Styles.map.detailModal.text.info}>{dateSubmitted}</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DISTANCE}</Text>
                <Text style={Styles.map.detailModal.text.info}>{distance}</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_STATUS}</Text>
                <Text style={Styles.map.detailModal.text.info}>{status}</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DESCRIPTION}</Text>
                <Text style={Styles.map.detailModal.text.info}>{description}</Text>
                <Item style={Styles.map.detailModal.line}/>

                </View>
               </ScrollView>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return{
        detailModal: state.detailModal,
        currentRequest: state.currentRequest,
        storeRequests: state.storeRequests,
        responseCodeProfile: state.responseCodeProfile,
        storeUserRequests: state.storeUserRequests
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