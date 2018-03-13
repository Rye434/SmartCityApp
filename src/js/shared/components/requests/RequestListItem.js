import React, { Component } from 'react';
import {View,Modal, StyleSheet, Image, Platform, Dimensions} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';

let arrow;

class RequestListItem extends Component {
    render() {
        if(Platform.OS == "ios"){
           arrow = <Icon name="ios-arrow-forward" />
        }
        if(Platform.OS == "android"){
           arrow = <Icon name="md-arrow-forward" />
        }
        return (
            <List>
                <ListItem thumbnail >
                    <Left>
                    <Thumbnail square size={80} source={{ uri: 'http://via.placeholder.com/80x80' }} />
                    </Left>
                    <Body>
                        <Text>Giant Fucking Pothole</Text>
                        <Text note> Distance </Text>
                    </Body>
                    <Right>{arrow}</Right>
                </ListItem>
            </List>
        );
    }
}

function mapStateToProps(state) {
    return{

    }
}

const mapDistpatchToProps = (dispatch) => {
    return {

    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(RequestListItem)