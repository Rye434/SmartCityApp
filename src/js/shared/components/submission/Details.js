import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner, Form, Picker, Item } from 'native-base';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";

var Strings = require('../../res/strings/StringsEN');



//TODO: add issue submission confirmation alert


class Details extends Component {

    render() {
        return(
            <View
                style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'column',}}>

                <Image source={{uri: 'http://via.placeholder.com/250x375'}}  style={{height: 250, width: 500}}/>
                <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                    <Form>
                        <Picker mode="dropdown" placeholder="Select A Department" note={false}
                                onValueChange={console.log('dicks')}
                                selectedValue={'id0'}
                                >
                            <Item label="Top level placeholder" value="id0"/>
                            <Item label="Top level placeholder" value="id1"/>

                        </Picker>
                        <Picker mode="dropdown" placeholder="Select A Subject" note={false}
                                onValueChange={console.log('dicks2')}
                                selectedValue={'id0'}
                        >
                            <Item label="Placeholder" value="id0"/>
                            <Item label="Placeholder" value="id1"/>
                        </Picker>

                    <TextInput placeholder='Enter a Description' onChange={()=>console.log("FeebackBox Inputted")} multiline={true} maxLength={255} width={300}  height={125} autogrow={true}/>
                    </Form>
                </KeyboardAvoidingView>
                <Button><Text>{Strings.BUTTONS_SUBMIT}</Text></Button>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return{
        imageSource: state.photoCached,
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        cachePhoto: (obj) => {
            return dispatch(actions.cachePhoto(obj))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Details)