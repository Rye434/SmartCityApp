import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as actions from "../shared/actions/Actions";
import {connect} from 'react-redux';

export default class HeaderAndroid extends Component {
    render() {
        return (

                <Header hasTabs={this.props.tabs}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={this.props.buttonClick}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Right>
                            <Button transparent onPress={this.props.buttonClickRight}>
                                <Text>{this.props.targetTextRight}</Text>
                            </Button>
                        </Right>
                    </Right>
                </Header>

        );
    }
}


