import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions,
    Image,
    AsyncStorage
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner } from 'native-base';
import { MapView, Animated, Marker} from 'expo';
import MapModal from './MapModal';
import DetailModal from './DetailModal';
import {connect} from "react-redux";
import * as actions from "../../actions/Actions";
import {currentRequest} from "../../actions/Actions";


var Strings = require('../../res/strings/StringsEN');
var Styles = require('../../res/assets/styles/Styles');

let height;
let width = Dimensions.get('window').width;
let topSpace;

let searchedLocation;
let searchedMarker;
let markers;

class IssueMap extends Component {

    async tryLogin() {
        try {
            //if this is the case if this code matches the return from the phone number entry set status to logged in
            const code = await AsyncStorage.getItem('encCode')
            const phone = await AsyncStorage.getItem('phone')
            if(code != null){
                console.log(code + " : " + phone)
                this.props.saveUserCode(code)
                this.props.phoneNum(phone)
                this.props.loginByPhone(phone,code)
            }
        } catch (error) {
            console.log("Error fetching data " + error);
        }
    }

    componentDidMount(){
        this.tryLogin()
    }

    render() {

        if(Platform.OS == 'ios'){
            height = Dimensions.get('window').height*.8;

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
                //if we want to show marker for searched location, make sure not to update state
                searchedMarker = searchedLocation.map((marker, i) => (
                    <MapView.Marker
                        key={i}
                        coordinate={marker.coordinates}
                        //onPress={()=>this.props.showMapModal()}
                    >
                    </MapView.Marker>
                ))
            }

            //build list based on action sheet

            if(this.props.storeRequests != null) {

                markers =  Object.keys(this.props.storeRequests.list).map((marker) => (
                    this.props.storeRequests.list[marker].serviceGroup == this.props.services[this.props.actionSheetValue]
                    ||
                    this.props.services[this.props.actionSheetValue] == "Clear filter"?
                        <MapView.Marker
                        key={marker}
                        coordinate={
                            {
                                latitude: parseFloat(this.props.storeRequests.list[marker].lat),
                                longitude: parseFloat(this.props.storeRequests.list[marker].long)
                            }
                        }
                        onPress={() => this.props.requestDetail(this.props.storeRequests.list[marker].requestIdOpen311, this.props.storeRequests.list[marker].requestId, true)}
                    >
                    </MapView.Marker> : something = null))
            }


            if(this.props.currentRequest != {}){
                detailModal = <DetailModal/>
                mapModal = <MapModal/>
            }

        return(
            <View style={{flex:1}}>

                <DetailModal/>
                <MapModal/>

            <MapView.Animated
                provider='google'
                        style={{
                            paddingTop:topSpace,
                            flex:1,
                            width: width,
                            height: height

                            }}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onUserLocationChange={this.props.mapRegion}
                    onRegionChange={(position)=>this.props.updateRegion(position)}
                    region={this.props.mapRegion}>
                {/*{searchedMarker}*/}
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
        distanceLoaded: state.distanceLoaded,
        actionSheetValue: state.actionSheetValue,
        services: state.services,
        responseCodeProfile: state.responseCodeProfile,
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
        requestDetail:(ID, mgisID, bool) =>{
            dispatch(actions.requestDetail(ID, mgisID, bool))
        },
        updateRegion: (position) => {
            dispatch(actions.updateRegion(position))
        },
        saveUserCode: (code) => {
            dispatch(actions.saveUserCode(code))
        },
        phoneNum: (phone) => {
            dispatch(actions.phoneNum(phone))
        },
        loginByPhone: (phone, encCode) => {
            dispatch(actions.loginByPhone(phone, encCode))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(IssueMap)