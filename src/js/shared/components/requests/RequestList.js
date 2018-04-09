import React, { Component } from 'react';
import {View,Modal, StyleSheet, Image, Platform, Dimensions} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";
import {Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs, List, ListItem, Footer, Segment, Spinner } from 'native-base';
import RequestListItem from "./RequestListItem";

let filterValues;
let placeholder;


class RequestList extends Component {

    render() {
        filterValues = this.props.filter; //object that is [Bool,bool,bool]

        if (filterValues[0] == true) {
            placeholder = this.props.storeRequests.list
        }
        if (filterValues[1] == true) {
            placeholder = this.props.storeUserRequests.list
        }
        if (filterValues[2] == true) {
            placeholder = this.props.storeUserRequests.acknowledge
        }

        //console.log(Object.keys(placeholder).length)

        if(this.props.distanceLoaded == false){
            return(
                <Spinner color='blue' />
            )

        }

        if(this.props.distanceLoaded == true) {

            if (Object.keys(placeholder).length > 0) {
                return (
                    <List>
                        {Object.keys(placeholder).map(function (item, i) {

                            return (
                                <RequestListItem key={i} {...this.props.storeRequests.list[item]}
                                                 title={this.props.storeRequests.list[item].serviceName}
                                                 navigation={this.props.navigation}
                                                 date={this.props.storeRequests.list[item].dateSubmitted}
                                                 distance={this.props.storeRequests.list[item].distance}
                                                 wholeObj={placeholder[item]}
                                />
                            )

                        }.bind(this))}
                    </List>
                )
            }
            if(Object.keys(placeholder).length == 0){
                return(
                    <Text>Nothing to show</Text>
                )
            }
        }


    }
}

function mapStateToProps(state) {
    return{
        storeRequests: state.storeRequests,
        userLocation: state.mapRegion,
        distanceLoaded: state.distanceLoaded,
        storeUserRequests: state.storeUserRequests
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        calculateDistance: (userLoc,requestList,) => {
            dispatch(actions.calculateDistance(userLoc, requestList))
        },

    }
};



export default connect(mapStateToProps,mapDispatchToProps)(RequestList)