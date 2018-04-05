import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';
import {connect} from "react-redux";
import * as actions from "../../actions/Actions";


const Strings = require('../../res/strings/StringsEN.js');
const Style = require('../../res/assets/styles/Styles');

let button;
let target;
let userExists = false; //for testing login flow, use True/False values


class Phone extends Component {

    proceed = () => {
        this.props.checkByPhone(this.props.phone)

        if(userExists == true){
            target = "Map"
        }
        if(userExists == false){
            target = "Verification"
        }

        this.props.navigation.navigate(target)
    }

    render() {

        if(this.props.phone.length == 10){
            button = <Button transparent onPress={()=>this.proceed()}>
                <Text>{Strings.HEADER_NEXT}</Text>
                <Icon name='arrow-forward' />
            </Button>
        }

        return(
            <ImageBackground style={Style.image.loginBackgroundImage} source={require('../../res/assets/img/smart-city-gradient.png')}>

                <Header style={[Style.header.header,{backgroundColor: 'rgba(0,0,0,0)'}]}>
                    <Left style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon style={{marginRight:10, color:'#f4f4f4'}} name='arrow-back' onPress={()=>this.props.navigation.navigate('PhoneOrFacebook')} />
                        <Text style={{fontSize:18, paddingBottom:5, color:'#f4f4f4'}}onPress={()=>this.props.navigation.navigate('PhoneOrFacebook')}>{Strings.HEADER_RETURN}</Text>
                    </Left>
                    <Body>

                    </Body>
                    <Right style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:18, paddingBottom:5, color:'#f4f4f4'}} onPress={()=>this.props.navigation.navigate(target)}>{Strings.HEADER_NEXT}</Text>
                        <Icon style={{marginLeft:10, color:'#f4f4f4'}} name='arrow-forward'onPress={()=>this.props.navigation.navigate(target)} />
                    </Right>
                </Header>



            <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                <Text style={Style.text.h1}>{Strings.LOGIN_PHONE}</Text>
                <Text style={Style.text.h2}>{Strings.LOGIN_MESSAGE}</Text>
                <Form style={{flex:0,width: 350, paddingTop:24, paddingBottom:48, alignItems:'center',flexDirection:'column',marginLeft:0}}>
                    <View  style={Style.view.input}>
                        <Label style={Style.view.profileLabelText}>{Strings.FIELDS_COUNTRY}</Label>
                        <Input keyboardType='phone-pad' onChange={()=>console.log("Phone")} placeholder="+1" editable={false} placeholderTextColor='#888' />
                    </View>
                    <View  style={Style.view.input}>
                        <Text style={Style.view.profileLabelText}>{Strings.FIELDS_NUMBER}</Text>
                        <Input keyboardType='phone-pad' onChangeText={(phone)=>this.props.phoneNum(phone)} maxLength={10} placeholder="Required" placeholderTextColor='#888'/>
                    </View >
                </Form>
            </KeyboardAvoidingView>
            </ImageBackground>
        )

    }
}

function mapStateToProps(state) {
    return{
        phone: state.phone,

    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        phoneNum: (phone) => {
            dispatch(actions.phoneNum(phone))
        },
        checkByPhone: (phone) => {
            dispatch(actions.checkByPhone(phone))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Phone)
