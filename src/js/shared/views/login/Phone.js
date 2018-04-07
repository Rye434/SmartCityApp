import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    AsyncStorage
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Input, Label, Form, Item } from 'native-base';
import {connect} from "react-redux";
import * as actions from "../../actions/Actions";


const Strings = require('../../res/strings/StringsEN.js');
const Style = require('../../res/assets/styles/Styles');

let button;
let target;


class Phone extends Component {

    proceed = () => {
        this.props.checkByPhone(this.props.phone)
    }

    componentDidUpdate(){
        if(this.props.responseCodeProfile != null) {
            if (this.props.responseCodeProfile.errorCode == 82) {
                if(Platform.OS == 'ios'){
                    target = "Map"

                }
                if(Platform.OS == 'android'){
                    target = "AndroidSideBar"
                }
            }
            if (this.props.responseCodeProfile.errorCode == 83) {
                target = "Verification"
            }
            this.props.navigation.navigate(target)
        }
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
                <Header style={[Style.header.header,{backgroundColor:'rgba(0,0,0,0)'}]}>
                        <Button transparent onPress={()=>this.props.navigation.navigate('PhoneOrFacebook')}>
                            <Icon name='arrow-back' />
                            <Text style={{paddingLeft:16, paddingRight:0, width:100}}>Back</Text>
                        </Button>

                    <Right>
                        {button}
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
        responseCodeProfile: state.responseCodeProfile
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
