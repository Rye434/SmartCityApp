import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TouchableOpacity, Dimensions, Alert
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner } from 'native-base';
import * as actions from "../actions/Actions";
import {connect} from "react-redux";
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import Details from "../components/submission/Details";

var Strings = require('../res/strings/StringsEN.js');

let body;

class Confirmation extends Component {

    render() {
        if(Platform.OS == "ios"){
            header = <HeaderIos title={Strings.APP_TITLE} />
        }
        if(Platform.OS == "android"){
            header =<HeaderAndroid title={Strings.APP_TITLE}/>
        }

        if(this.props.submissionConfirmationLoading === true){
            body =  <Spinner />
        }
        if(this.props.submissionConfirmationLoading === false){
            body = <View>
                <Text>{Strings.SUBMISSION_THANK_YOU}</Text>
                <Button onPress={()=>this.props.navigation.navigate('Map')}><Text>{Strings.SUBMISSION_RETURN}</Text></Button>
                    </View>
        }

        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                }}>
                {header}
                <Content>

                    {body}

                </Content>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return{
        submissionConfirmationLoading:state.submissionConfirmationLoading
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        cachePhoto: (obj) => {
            return dispatch(actions.cachePhoto(obj))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Confirmation)