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
import {connect} from "react-redux";
import * as actions from "../../actions/Actions";


var Strings = require('../../res/strings/StringsEN');

let height;
let width = Dimensions.get('window').width;
let topSpace;

let searchedLocation;

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
                    image: require('../../res/assets/img/Button.png'),
                    coordinates: {
                        latitude: this.props.mapRegion.latitude,
                        longitude: this.props.mapRegion.longitude
                    },
                }
            ];
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
                    onUserLocationChange={this.props.mapRegion}
                    region={this.props.mapRegion}>




                {searchedLocation.map((marker, i) => (
                    <MapView.Marker
                        key={i}
                        coordinate={marker.coordinates}
                        // onPress={()=>{this.handleMarkerClick(marker.title)}}
                        >
                        <Image source={marker.image} style={{width:24,height:24}}/>
                    </MapView.Marker>

                ))}

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