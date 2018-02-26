import React from "react";
import {Container, Content, Icon, Left, List, ListItem, Text} from "native-base";
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import SideBar from "./components/SideBar";


import Requests from "./views/Requests";
import Map from "./views/Map";
import Camera from "./views/Camera";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Phone from "./views/Phone";
import Verification from "./views/Verification";
import CreateProfile from "./views/CreateProfile";

var Strings = require('./res/strings/StringsEN.js');

export const RoutesNavIos = [
    {
        name: Strings.PAGE_HEADERS_MAP,
        route: "Map",
        icon: "compass"
    },
    {
        name: Strings.PAGE_HEADERS_CAMERA,
        route: "Camera",
        icon: "camera"
    },
    {
        name: Strings.PAGE_HEADERS_REQUESTS,
        route: "Requests",
        icon: "time"
    }
];


export const AppRouteIos = StackNavigator({
        Map: {screen: Map},
        Camera: {screen: Camera},
        Requests: {screen: Requests},
        Profile: {screen: Profile}
    },
    {
        headerMode:'none'
    });

export const LoginFlow = StackNavigator({
        Phone: {screen: Phone},
        Verification: {screen:Verification},
        CreateProfile: {screen: CreateProfile},
        Login: {screen: Login},
        AppRouteIos: {screen: AppRouteIos},
    },
    {
        headerMode:'none'
    })



export const routesAndroid = [
    {
        name: Strings.PAGE_HEADERS_MAP,
        route: "Map",
        icon: "compass"
    },
    {
        name: Strings.PAGE_HEADERS_CAMERA,
        route: "Camera",
        icon: "camera"
    },
    {
        name: Strings.PAGE_HEADERS_REQUESTS,
        route: "Requests",
        icon: "time"
    }
];


export const AndroidSideBar = DrawerNavigator({
        Map: { screen: Map },
        Camera: { screen: Camera },
        Requests: { screen: Requests },
        Profile: { screen: Profile },
    },
    {
        contentComponent: props => <SideBar {...props} />,
    });

export const AppRouteAndroid = StackNavigator({
    Phone: {screen: Phone},
    Verification: {screen:Verification},
    CreateProfile: {screen: CreateProfile},
    Login: {screen: Login},
    AndroidSideBar: {screen: AndroidSideBar},
    Camera: { screen: Camera },
    Map: { screen: Map },
    Requests: { screen: Requests },
}, {
    headerMode: 'none',
});
