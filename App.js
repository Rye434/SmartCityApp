import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';

import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from "redux";
import stocksApp from "./src/js/shared/reducers/Reducers";

import {AppRouteAndroid, AppRouteIos, AppRoute, AppNavigator, LoginFlow} from "./src/js/shared/NavItems";

let state = {
    photoCached: {},
    editModal: false
}

let store = createStore(stocksApp, state,  applyMiddleware(thunk));

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    componentWillMount() {
        this.loadFonts();
    }
    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

    if(Platform.OS === 'android') {
        return (
            <Provider store={store}>
                <Container>
                <AppRouteAndroid/>
                </Container>
            </Provider>
        );
    }
    if(Platform.OS === 'ios'){
      return (
          <Provider store={store}>
            <LoginFlow/>
          </Provider>
        );
    }



  }
}

