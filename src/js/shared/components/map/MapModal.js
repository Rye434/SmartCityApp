import React, { Component } from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';



let modalSpaceHeight;

class MapModal extends Component {

    render() {

        if(Platform.OS == 'android'){
            if(Dimensions.get('window').height<=700) {
                modalSpaceHeight = Dimensions.get('window').height * .75
            }
            if(Dimensions.get('window').height>700) {
                modalSpaceHeight = Dimensions.get('window').height * .85
            }

        }
        if(Platform.OS == 'ios'){
            modalSpaceHeight = Dimensions.get('window').height*.70
        }

        return (
            <Modal
                visible={this.props.mapModal}
                animationType={'slide'}
                onRequestClose={this.props.showMapModal}
                transparent={true}>
                <TouchableOpacity onPress={this.props.showMapModal}>

                    <TouchableWithoutFeedback>
                <View style={{height:120, width:Dimensions.get('window').width*.9, marginLeft:Dimensions.get('window').width*.05,
                    marginTop:modalSpaceHeight,alignItems: 'center', backgroundColor:'white'}}>

                    <View style={{flex:1,flexDirection:'row', marginTop:80}}>
                        <Button block
                                //onPress={this.props.showMapModal}
                                style={{height:32, flex:1, marginLeft:8,marginRight:4}}>
                        </Button>
                        <Button block
                                // onPress={this.props.showMapModal}
                                style={{height:32, flex:1, marginLeft:4,marginRight:8}}>
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
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(MapModal)