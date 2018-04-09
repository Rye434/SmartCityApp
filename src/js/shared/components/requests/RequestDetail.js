import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Item} from 'native-base';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";
import {distanceLoaded} from "../../actions/Actions";


const Strings = require('../../res/strings/StringsEN.js');
const Styles = require('../../res/assets/styles/Styles');

let serviceName;
let serviceGroup;
let dateSubmitted;
let description;
let status;
let distance;
let address;
let ackIcon;
let buttonText;

class RequestDetail extends Component {

    updateAck = () => {
        if (this.props.storeUserRequests.acknowledge.length > 0) {
            let inList = false;
            for (let item in this.props.storeUserRequests.acknowledge) {
                //if item is in ack list for user toggle to false on press
                if (this.props.detailRequest.requestId === this.props.storeUserRequests.acknowledge[item].requestId) {
                    console.log(this.props.detailRequest.requestId + "  :  " + item.requestId)
                    inList = true
                    this.props.toggleAck(this.props.responseCodeProfile.userId, false, this.props.storeUserRequests.acknowledge[item].requestIdOpen311, this.props.storeUserRequests.acknowledge[item].requestId)
                }
            }
            //if if loops through user ack list and request is not present, ack it
            if (inList == false) {
                this.props.toggleAck(this.props.responseCodeProfile.userId, true,this.props.detailRequest.requestIdOpen311, this.props.detailRequest.requestId)
            }
        }
        if (this.props.storeUserRequests.acknowledge.length === 0) {
            console.log(this.props.detailRequest.requestId)
            this.props.toggleAck(this.props.responseCodeProfile.userId, true, this.props.detailRequest.requestIdOpen311, this.props.detailRequest.requestId)
        }

    }




    render() {

        if (this.props.detailRequest != null) {

            serviceName = this.props.detailRequest.serviceName
            serviceGroup = this.props.detailRequest.serviceGroup
            dateSubmitted = this.props.detailRequest.dateSubmitted.substr(0, 11)
            description = this.props.detailRequest.description
            status = this.props.detailRequest.status
            distance = this.props.detailRequest.distance
            address = this.props.detailRequest.address
            image = this.props.detailRequest.image


            //check if item in ack list for user then set checkbox button accordingly
            if (this.props.storeUserRequests.acknowledge.length > 0) {
                for (let item in this.props.storeUserRequests.acknowledge) {
                    if (this.props.detailRequest.requestId === item.requestId || this.props.detailRequest.requestIdOpen311 === item.requestIdOpen311) {
                        ackIcon = Platform.OS == 'ios' ? "ios-checkbox-outline" : "md-checkbox-outline"
                    }
                }
            }else {
                ackIcon = Platform.OS == 'ios' ? "ios-square-outline" : "md-square-outline"
            }

            if(this.props.detailRequest.requestId != null){
                buttonText = <Text>
                                <Icon name={ackIcon}/>{Strings.DETAIL_MODAL_ACKNOWLEDGE} {this.props.detailRequest.acknowledgeCount}
                             </Text>
            }
            if(this.props.detailRequest.requestId === null){
                buttonText = <Text>Cannot Acknowledge this Request</Text>
            }

            return (
                <View>
                    <Image source={{uri: image}}
                           style={{height: 250, width: 500}}/>

                    <Button style={Styles.map.detailModal.plusOne} disabled={this.props.detailRequest.requestId === null? true : false} onPress={this.updateAck}>
                        {buttonText}
                    </Button>

                    <View style={Styles.map.detailModal.detailView}>
                        <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DATE}</Text>
                        <Text style={Styles.map.detailModal.text.info}>{dateSubmitted}</Text>
                        <Item style={Styles.map.detailModal.line}/>
                        <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DISTANCE}</Text>
                        <Text style={Styles.map.detailModal.text.info}>{distance}</Text>
                        <Text style={Styles.map.detailModal.text.info}>{address}</Text>
                        <Item style={Styles.map.detailModal.line}/>
                        <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_STATUS}</Text>
                        <Text style={Styles.map.detailModal.text.info}>{status}</Text>
                        <Item style={Styles.map.detailModal.line}/>
                        <Text note
                              style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DESCRIPTION}</Text>
                        <Text style={Styles.map.detailModal.text.info}>{description}</Text>
                        <Item style={Styles.map.detailModal.line}/>
                    </View>
                </View>
            )

        }
    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
        detailRequest: state.detailRequest,
        responseCodeProfile: state.responseCodeProfile,
        storeUserRequests: state.storeUserRequests
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        modalVisible: () => {
            return dispatch(actions.editModal(true))
        },
        toggleAck: (userId, bool, id311, id ) => {
            dispatch(actions.toggleAck(userId, bool, id311, id ))
        }
    }
}




export default connect(mapStateToProps,mapDistpatchToProps)(RequestDetail)