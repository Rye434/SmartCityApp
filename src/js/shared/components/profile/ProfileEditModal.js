import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';




class ProfileEditModal extends Component {

    render() {
        return (
            <Modal
                visible={this.props.editModal}
                animationType={'slide'}
                onRequestClose={this.props.toggleModal}>

                

                <Button full
                        onPress={this.props.toggleModal}
                        style={{flex:1, height:60}}>
                </Button>


            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return{
        editModal: state.editModal,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            return dispatch(actions.editModal(false))
        },
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(ProfileEditModal)