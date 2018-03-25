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


var Strings = require('../../res/strings/StringsEN.js');



class RequestDetail extends Component {

    render() {
        return(
            <View>
                <Image source={{uri: 'http://via.placeholder.com/250x500'}}  style={{height: 250, width: 500}}></Image>

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
            </View>
        )

    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
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