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
    render() {
        filterValues = this.props.filter;

        if(filterValues[0]==true){
            placeholder = "Public"
        }
        if(filterValues[1]==true){
            placeholder = "Personal"
        }
        if(filterValues[2]==true){
            placeholder = "Acknowledged"
        }

        return (
            <View>
            <Text>{placeholder}</Text>
                {/*<RequestListItem/>*/}
            </View>

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



export default connect(mapStateToProps,mapDistpatchToProps)(RequestList)