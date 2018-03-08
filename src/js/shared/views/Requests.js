import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Thumbnail, List, ListItem, Segment } from 'native-base';
import HeaderAndroid from '../../android/Header.android';
import FooterIos from "../../ios/Footer.ios";
import HeaderIos from "../../ios/Header.ios";
import FabButton from "../../android/FabButton";
import RequestList from "../../shared/components/requests/RequestList";
import * as actions from "../actions/Actions";
import {connect} from "react-redux";

var Strings = require('../res/strings/StringsEN.js');

let footer;
let fab;
let header;

class Requests extends Component {

    render() {
        if(Platform.OS === "ios"){
            footer = <FooterIos navigation={this.props.navigation} activePage={'Requests'}/>
            header = <HeaderIos title={Strings.PAGE_HEADERS_REQUESTS}  targetTextRight={Strings.PAGE_HEADERS_PROFILE} buttonClickRight={() => this.props.navigation.navigate("Profile")} tabs={true}/>
        }
        if(Platform.OS == "android"){
            fab = <FabButton navigation={this.props.navigation}/>
            header =<HeaderAndroid buttonClick={() => this.props.navigation.navigate("DrawerOpen")} title={Strings.PAGE_HEADERS_REQUESTS} tabs={true}/>
        }
        return(
            <Container>
                <View>
                {header}
                    <Segment>
                        <Button first active={this.props.filterSegment[0]} onPress={()=>this.props.filterSegmentToggle(1)} style={{width:Dimensions.get('window').width*.3,justifyContent: 'center'}}>
                            <Text>{Strings.REQUEST_SEGMENT_PUBLIC}</Text>
                        </Button>
                        <Button active={this.props.filterSegment[1]} onPress={()=>this.props.filterSegmentToggle(2)} style={{width:Dimensions.get('window').width*.3,justifyContent: 'center'}}>
                            <Text>{Strings.REQUEST_SEGMENT_PERSONAL}</Text>
                        </Button>
                        <Button last active={this.props.filterSegment[2]} onPress={()=>this.props.filterSegmentToggle(3)} style={{width:Dimensions.get('window').width*.3,justifyContent: 'center'}}>
                            <Text>{Strings.REQUEST_SEGMENT_ACKNOWLEDGED}</Text>
                        </Button>
                    </Segment>
                </View>
                <Content>
                    <RequestList filter={this.props.filterSegment}/>
                </Content>
                {fab}
                {footer}
            </Container>
        )

    }
}


function mapStateToProps(state) {
    return{
        filterSegment: state.filterSegment,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        filterSegmentToggle: (int) => {
            return dispatch(actions.filterSegmentToggle(int))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Requests)