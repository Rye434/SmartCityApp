import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner } from 'native-base';
import { MapView, Animated, Marker} from 'expo';
import MapModal from './MapModal';
import DetailModal from './DetailModal';
import {connect} from "react-redux";
import * as actions from "../../actions/Actions";


var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let height;
let width = Dimensions.get('window').width;
let topSpace;

let searchedLocation;
let searchedMarker;
let markers;

let customMarker;
let customImage = require('../../res/assets/img/Button.png');


class IssueMap extends Component {


    render() {

        if(Platform.OS == 'ios'){
            height = Dimensions.get('window').height*.8;
            customMarker =  <Image source={customImage} resizeMode="contain" style={{width: 24, height: 24}}/>;

        }
        if(Platform.OS == 'android'){
            height = Dimensions.get('window').height;
            topSpace = Dimensions.get('window').height*.1;

        }


        if(this.props.mapRegion == null){
            return(
            <Spinner color='blue' />
            )
        }else{
            searchedLocation= [
                {
                    coordinates: {
                        latitude: this.props.mapRegion.latitude,
                        longitude: this.props.mapRegion.longitude
                    },
                }
            ];


            if(this.props.mapRegion.latitudeDelta != 0.0922){
                searchedMarker = searchedLocation.map((marker, i) => (
                    <MapView.Marker
                        key={i}
                        coordinate={marker.coordinates}
                        onPress={()=>this.props.showMapModal()}
                    >
                        {customMarker}
                    </MapView.Marker>
                ))
            }


            if(this.props.storeRequests != null){
                markers = Object.keys(this.props.storeRequests.list).map((marker) => (
                    <MapView.Marker
                        key={marker}
                        coordinate={
                    {
                        latitude: parseFloat(this.props.storeRequests.list[marker].lat),
                        longitude: parseFloat(this.props.storeRequests.list[marker].long)
                    }
                    }
                        onPress={()=>this.props.requestDetail(this.props.storeRequests.list[marker].requestIdOpen311,this.props.storeRequests.list[marker].requestId)}
                />))
            }

        return(
            <View>

            <DetailModal/>
            <MapModal/>

            <MapView.Animated
                provider='google'
                        style={{
                            paddingTop:topSpace,
                            flex:1,
                            width: width,
                            height: height*1.1,

                            }}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onUserLocationChange={this.props.mapRegion}
                    region={this.props.mapRegion}>
                {searchedMarker}
                {markers}




            </MapView.Animated>
            </View>
                )

    }
    }
}


function mapStateToProps(state) {
    return{
        mapRegion: state.mapRegion,
        mapModal: state.mapModal,
        storeRequests: state.storeRequests,
        distanceLoaded: state.distanceLoaded
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        showMapModal: () => {
            dispatch(actions.mapModal(true))
        },
        calculateDistance: (userLoc,requestList,) => {
            dispatch(actions.calculateDistance(userLoc, requestList))
        },
        preload:(position) => {
            dispatch(actions.preload(position))
        },
        requestDetail:(ID, mgisID) =>{
            dispatch(actions.requestDetail(ID, mgisID))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(IssueMap)