import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner } from 'native-base';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";

var Strings = require('../../res/strings/StringsEN');



//TODO: add issue submission confirmation alert




class Details extends Component {

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                }}>







            </View>
        )
    }
}

function mapStateToProps(state) {
    return{
        imageSource: state.photoCached,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        cachePhoto: (obj) => {
            return dispatch(actions.cachePhoto(obj))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Details)