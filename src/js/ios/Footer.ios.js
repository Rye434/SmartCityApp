import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {RoutesNav, AppRouteIos, RoutesNavIos} from "../shared/NavItems";
import {StackNavigator} from 'react-navigation';
import * as actions from "../shared/actions/Actions";
import {connect} from "react-redux";

class FooterIos extends Component {

    render() {

        return (

                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Map')
                        }}
                                active={'Map' == this.props.activePage ? true: false}>
                            <Icon name={'compass'}/>
                            <Text style={{fontSize:12}}>Portfolio</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Camera')
                        }}
                                active={'Camera' == this.props.activePage ? true: false}>
                            <Icon name={'camera'}/>
                            <Text style={{fontSize:12}}>Portfolio</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button vertical onPress={() => {
                            this.props.navigation.navigate('Requests')
                        }}
                                active={'Requests' == this.props.activePage ? true: false}>
                            <Icon name={'time'}/>
                            <Text style={{fontSize:12}}>Portfolio</Text>
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

const mapDistpatchToProps = (dispatch, name) => {
    return {
        activeBtn: () => {
            console.log(name.navigation.state.routeName)
            return dispatch(actions.activeButton(name.navigation.state.routeName))
        }
    }
}


export default connect(mapStateToProps,mapDistpatchToProps)(FooterIos)