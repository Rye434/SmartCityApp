import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {RoutesNav, AppRouteIos, RoutesNavIos} from "../shared/NavItems";
import {StackNavigator} from 'react-navigation';
import * as actions from "../shared/actions/Actions";
import {connect} from "react-redux";

var Styles = require('../shared/res/assets/styles/Styles');

class FooterIos extends Component {

    render() {

        return (

                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Map')
                        }}
                                active={'Map' == this.props.activePage ? true: false}>
                            <Icon name={'ios-map'}/>
                            <Text style={{fontSize:12}}>Map</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Camera')
                        }}
                                active={'Camera' == this.props.activePage ? true: false}>
                            <Icon name={'ios-camera'} style={{fontSize:48}}/>
                            <Text style={{fontSize:12 , marginTop:-13,paddingBottom:0}}>Camera</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Requests')
                        }}
                                active={'Requests' == this.props.activePage ? true: false}>
                            <Icon name={'ios-paper'} style={{fontSize:26}}/>
                            <Text style={{fontSize:12}}>Requests</Text>
                        </Button>
                    </FooterTab>

                </Footer>

        );
    }
}

function mapStateToProps(state) {
    return{
        activeButton: state.activeButton
    }
}

const mapDispatchToProps = (dispatch, name) => {
    return {
        activeBtn: () => {
            console.log(name.navigation.state.routeName);
            return dispatch(actions.activeButton(name.navigation.state.routeName))
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(FooterIos)