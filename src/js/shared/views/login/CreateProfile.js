import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    Image,
    ImageBackground

} from 'react-native';
// import {StyleProvider, Container, Header, Body, Title, Content} from 'native-base';
import {  StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';


//width: Dimensions.get('window').width*.8
const Strings = require('../../res/strings/StringsEN.js');
const Style = require('../../res/assets/styles/Styles');
const dimens = Dimensions.get('window').width;
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
            <ImageBackground style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Phone')}>
                            <Icon name='arrow-back' />
                            <Text style={{paddingLeft:16, paddingRight:0, width:100}}>{Strings.HEADER_RETURN}</Text>
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate(target)}>
                            <Text>{Strings.HEADER_DONE}</Text>
                            <Icon name='arrow-forward'/>
                        </Button>
                    </Right>
        <ScrollView style={{flex:1,height:Dimensions.get('window').height, marginTop:16, }}>

            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', alignItems:'center'}} behavior="padding">
                <Text style={[Style.text.h1, Style.view.input2]}>{Strings.PAGE_HEADERS_CREATE}</Text>
                <Form style={{flex:0,width: dimens*.84, alignItems:'flex-start'}}>
                        <View floatingLabel style={Style.view.input}>
                        <Input onChange={()=>console.log("First-Name")} placeholder={Strings.FIELDS_FIRST_NAME}/>
                        </View>
                        <View floatingLabel style={[Style.view.input, Style.view.input2]}>
                        <Input onChange={()=>console.log("LastName")} placeholder={Strings.FIELDS_LAST_NAME}/>
                        </View>

                        <View floatingLabel keyboardType="numeric" style={Style.view.input}>
                            <Input onChange={()=>console.log("Number")} placeholder="+1"/>
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
        </ScrollView>
            </ImageBackground>

        )

    }
}

