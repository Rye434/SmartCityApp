import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';

import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from "redux";
import stocksApp from "./src/js/shared/reducers/Reducers";

import {AppRouteAndroid, AppRouteIos, AppRoute, AppNavigator, LoginFlow} from "./src/js/shared/NavItems";
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform';

let state = {
    photoCached: {},
    editModal: false,
    mapModal: false,
    detailModal: false,
    filterSegment:[true,false,false],
    mapRegion:null,
    storeRequests:null,
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
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

    if(Platform.OS === 'android') {
        return (
            <StyleProvider style={getTheme(platform)}>
            <Provider store={store}>
                <Container>
                <AppRouteAndroid/>
                </Container>
            </Provider>
            </StyleProvider>
        );
    }
    if(Platform.OS === 'ios'){
      return (
          <StyleProvider style={getTheme(platform)}>
          <Provider store={store}>
            <LoginFlow/>
          </Provider>
          </StyleProvider>
        );
    }



  }
}

