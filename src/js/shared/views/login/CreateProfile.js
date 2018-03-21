import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    Image

} from 'react-native';
// import {StyleProvider, Container, Header, Body, Title, Content} from 'native-base';
import {  StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';


//width: Dimensions.get('window').width*.8
var Strings = require('../../res/strings/StringsEN.js');
var Style = require('../../res/assets/styles/Styles');
var dimens = Dimensions.get('window').width;
let target;

export default class CreateProfile extends Component {

    render() {
        if(Platform.OS == 'ios'){
            target = "Map"
        }
        if(Platform.OS == 'android'){
            target = "AndroidSideBar"
        }
        return(
            <Image style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
                <Header style={{backgroundColor: 'rgba(0,0,0,0)', borderBottomWidth:0}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate(target)}>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate(target)}>
                            <Text>Done</Text>
                        </Button>
                    </Right>
                </Header>
        <ScrollView style={{flex:1, marginTop:16, }}>

            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', alignItems:'center'}} behavior="padding">
                <Text style={[Style.text.h1, Style.view.input2]}>Create Profile</Text>
                <Form style={{flex:0,width: dimens*.84, alignItems:'flex-start'}}>
                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("First-Name")} placeholder={Strings.FIELDS_FIRST_NAME}/>
                        </View>
                        <View floatingLabel style={[Style.view.input, Style.view.input2]}>
                        <Input onChange={()=>console.log("LastName")} placeholder={Strings.FIELDS_LAST_NAME}/>
                        </View>

                        <View floatingLabel keyboardType='email-address' style={[Style.view.input, Style.view.input2]}>
                        <Input onChange={()=>console.log("Email")} placeholder={Strings.FIELDS_EMAIL}/>
                        </View>

                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("Address")} placeholder={Strings.FIELDS_ADDRESS}/>
                        </View>

                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("AddressLine")} placeholder={Strings.FIELDS_ADDRESS_LINE2}/>
                        </View>
                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("City")} placeholder={Strings.FIELDS_CITY}/>
                        </View>

                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("Postal")} placeholder={Strings.FIELDS_PROVINCE}/>
                        </View>

                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("Province")} placeholder={Strings.FIELDS_POSTAL}/>
                        </View>

                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("Country")} placeholder={Strings.FIELDS_COUNTRY}/>
                        </View>

                </Form>
            </KeyboardAvoidingView>
            <View style={{marginBottom:20, justifyContent:'center', alignItems:'center'}}>
                <Item >
                    <Button onPress={() => this.props.navigation.navigate(target)} style={{marginTop:24}}><Text>{Strings.BUTTONS_SAVE}</Text></Button>
                </Item>
            </View>
        </ScrollView>
            </Image>

        )

    }
}

