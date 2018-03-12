import React from "react";
import { AppRegistry, Image, StatusBar, Platform, View, TouchableOpacity } from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon,
    Left,
    Thumbnail
} from "native-base";
import {routesAndroid} from "../NavItems";

var Strings = require('../res/strings/StringsEN.js');



export default class SideBar extends React.Component {

    handleOnPress(route){
        this.props.navigation.navigate(route);
    }


    render() {
        return (
            <Container>
                <Content>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>

                    <View style={{backgroundColor:'#3F51B5' ,height:160,flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-end'}}>
                        <Text style={{color:'white', paddingBottom:16,paddingLeft:8, fontSize:24}}>John Smith</Text>
                    </View>
                    </TouchableOpacity>
                    <List
                        dataArray={routesAndroid}
                        contentContainerStyle={{ marginTop: 16 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.handleOnPress(data.route)}
                                    style={{borderBottomWidth: 0}}>
                                    <Left>
                                        <Icon active name={data.icon} style={{color: "#777", fontSize: 26, width: 30}}/>
                                        <Text>
                                            {data.name}
                                        </Text>
                                    </Left>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}