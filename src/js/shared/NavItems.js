import React from "react";
import {Container, Content, Icon, Left, List, ListItem, Text} from "native-base";
import {DrawerNavigator, StackNavigator} from 'react-navigation';


import Services from "./views/Services";
import Requests from "./views/Requests";
import Map from "./views/Map";
import Camera from "./views/Camera";
import Profile from "./views/Profile";


export const RoutesNavIos = [
    {
        name: "Map",
        route: "Map",
        icon: "compass"
    },
    {
        name: "Camera",
        route: "Camera",
        icon: "camera"
    },
    {
        name: "Requests",
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
        headerMode:'float'
    });



export const MapNavigator = StackNavigator({
    Map: {
        screen: Map,
    }
});


export const RequestsNavigator = StackNavigator({
    Requests: {
        screen: Requests,

    }
});

export const ProfileNavigator = StackNavigator({
    Profile: {
        screen: Profile,

    }
});


 export const DrawerList = DrawerNavigator({
    Map: {
        screen: MapNavigator,
        navigationOptions: {
                drawerLabel: 'Map',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="compass" style={{color:tintColor}} />
                ),
        },
     },
     Requests: {
         screen: RequestsNavigator,
         navigationOptions: {
             drawerLabel: 'Requests',
             drawerIcon: ({ tintColor }) => (
                 <Icon name="time" style={{color:tintColor}} />
             ),
         },
     },
     Profile: {
         screen: ProfileNavigator,
         navigationOptions: {
             drawerLabel: 'Profile',
             drawerIcon: ({ tintColor }) => (
                 <Icon name="person" style={{color:tintColor}} />
             ),
         },
     },

});

export const AppRouteAndroid = StackNavigator({
    Drawer: { screen: DrawerList },
}, {
    headerMode: 'none',
});