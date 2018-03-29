import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions";
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment, Item } from 'native-base';

var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let arrow;


class DetailModal extends Component {

    render() {

        if(Platform.OS == 'android'){
           arrow = <Icon name='arrow-back'/>
        }
        if(Platform.OS == 'ios'){
            arrow = <Icon name='arrow-down' style={{fontSize:40, color:'#f4f4f4'}}/>
        }

        return (
            <Modal
                visible={this.props.detailModal}
                animationType={'slide'}
                onRequestClose={this.props.showDetailModal}>

                <View style={{flexDirection:'column'}}>
                <Image source={{uri: 'http://via.placeholder.com/250x500'}}  style={{height: 250, width: 500}}>
                    <Button transparent onPress={this.props.showDetailModal} style={Styles.map.detailModal.backButton}>
                        {arrow}
                    </Button>
                </Image>

                <View style={Styles.map.detailModal.infoView}>
                    <Text style ={Styles.map.detailModal.text.header}>Pothole</Text>
                    <Text note style ={Styles.map.detailModal.text.note}>219 Laurier Ave W, Ottawa ON K1P</Text>


                </View>

                    <Button block title="acknowledge" style={Styles.map.detailModal.plusOne}>
                        <Text>{Strings.DETAIL_MODAL_ACKNOWLEDGE}109</Text>
                    </Button>



                <View style={Styles.map.detailModal.detailView}>
                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DATE}</Text>
                <Text style={Styles.map.detailModal.text.info}>2018-02-19</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DISTANCE}</Text>
                <Text style={Styles.map.detailModal.text.info}>340M</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_STATUS}</Text>
                <Text style={Styles.map.detailModal.text.info}>Open</Text>
                <Item style={Styles.map.detailModal.line}/>

                <Text note style={Styles.map.detailModal.text.infoNote}>{Strings.DETAIL_MODAL_DESCRIPTION}</Text>
                <Text style={Styles.map.detailModal.text.info}>Fire Hydrant Obstruction - Car has been parked in front for several hours.</Text>
                <Item style={Styles.map.detailModal.line}/>

                </View>
               </View>
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