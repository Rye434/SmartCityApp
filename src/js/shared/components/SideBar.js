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


export const routes = [
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

                        <Thumbnail large source={{uri: "http://i.pravatar.cc/300"}} style={{marginLeft:12, marginBottom:12}}/>
                        <Text style={{color:'white', paddingBottom:16,paddingLeft:8, fontSize:24}}>John Smith</Text>
                    </View>
                    </TouchableOpacity>
                    <List
                        dataArray={routes}
                        contentContainerStyle={{ marginTop: 16 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.handleOnPress(data.route)}>
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