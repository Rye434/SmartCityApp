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

class RequestDetail extends Component {

    render() {
        console.log(this.props.detailRequest)
        if(this.props.detailRequest != null) {
            serviceName = this.props.detailRequest.serviceName
            serviceGroup = this.props.detailRequest.serviceGroup
            dateSubmitted = this.props.detailRequest.dateSubmitted.substr(0,11)
            description = this.props.detailRequest.description
            status = this.props.detailRequest.status
            distance = this.props.detailRequest.distance
        }

        return(
            <View>
                <Image source={{uri: 'http://via.placeholder.com/250x500'}}  style={{height: 250, width: 500}}></Image>

                <Button style={Styles.map.detailModal.plusOne}><Text>{Strings.DETAIL_MODAL_ACKNOWLEDGE}109</Text></Button>

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
            </View>
        )

    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
        detailRequest: state.detailRequest
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