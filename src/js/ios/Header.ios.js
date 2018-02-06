import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class HeaderIos extends Component {
    render() {
        return (
                <Header hasTabs={this.props.tabs}>
                    <Left/>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                    <Right />
                </Header>
        );
    }
}