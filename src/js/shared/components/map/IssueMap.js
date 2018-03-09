import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import { MapView} from 'expo';


var Strings = require('../../res/strings/StringsEN');

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;



//TODO: the detail popup when pins are clicked.



export default class IssueMap extends Component {

    render() {

        return(
            <MapView
                provider='google'
                        style={{
                            flex:0,
                            width: width,
                            height: height,

                            }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                )

    }
}