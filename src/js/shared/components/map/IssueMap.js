import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner } from 'native-base';
import { MapView, Animated } from 'expo';
import {connect} from "react-redux";
import AddressSearch from "./AddressSearch";
import * as actions from "../../actions/Actions";


var Strings = require('../../res/strings/StringsEN');

let height;
let width = Dimensions.get('window').width;
let topSpace;



class IssueMap extends Component {
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.props.getUserLocation(position);
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

    }

    render() {
        if(Platform.OS == 'ios'){
            height = Dimensions.get('window').height*.8;
        }
        if(Platform.OS == 'android'){
            height = Dimensions.get('window').height*.9;
            topSpace = Dimensions.get('window').height*.1;
        }


        if(this.props.mapRegion == null){
            return(
            <Spinner color='blue' />
            )
        }else{
        return(
            <View>
            <MapView.Animated
                provider='google'
                        style={{
                            paddingTop:topSpace,
                            flex:1,
                            width: width,
                            height: height,

                            }}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onUserLocationChange={this.props.mapRegion.longitude}
                    region={this.props.mapRegion}>
            </MapView.Animated>
            </View>
                )

    }
    }
}


function mapStateToProps(state) {
    return{
        mapRegion: state.mapRegion,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        getUserLocation: (position) => {
            return dispatch(actions.getUserLocation(position))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(IssueMap)