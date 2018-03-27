import React, { Component } from 'react';
import {View,Modal, StyleSheet, Image, Platform, Dimensions} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment } from 'native-base';
import RequestListItem from "./RequestListItem";

let filterValues;
let placeholder;


//TODO: use request list item to define the items this component builds the list with


class RequestList extends Component {
    componentWillMount() {
        this.props.calculateDistance(this.props.userLocation,this.props.storeRequests)
    }


    render() {
        filterValues = this.props.filter; //object that is [Bool,bool,bool]

        if (filterValues[0] == true) {
            placeholder = "Public"
        }
        if (filterValues[1] == true) {
            placeholder = "Personal"
        }
        if (filterValues[2] == true) {
            placeholder = "Acknowledged"
        }


        return(
            <List>
        {
            Object.keys(this.props.storeRequests.list).map(function (item, i) {

                return (
                    <RequestListItem key={i} {...this.props.storeRequests.list[item]}
                                     title={this.props.storeRequests.list[item].serviceGroup}
                                     navigation={this.props.navigation}
                                     date={this.props.storeRequests.list[item].dateSubmitted}
                                     distance={this.props.storeRequests.list[item].distance}/>
                )

            }.bind(this))}
            </List>
    )

    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
        userLocation: state.mapRegion,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        calculateDistance: (userLoc,requestList,) => {
            return dispatch(actions.calculateDistance(userLoc, requestList))
        },
    }
};



export default connect(mapStateToProps,mapDistpatchToProps)(RequestList)