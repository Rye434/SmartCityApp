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

const Strings = require('../../res/strings/StringsEN');
const Styles = require('../../res/assets/styles/Styles');


//TODO: add issue submission confirmation alert


class Details extends Component {

    render() {
        return(
            <View
                style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'column',}}>

                <Image source={{uri: 'http://via.placeholder.com/250x375'}}  style={{height: 250, width: 500}}/>
                <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                    <Form>
                        <Picker mode="dropdown" placeholder={Strings.SUBMISSION_DETAILS_DEPARTMENT} note={false}
                                onValueChange={console.log('DEPARTMENT')}
                                selectedValue={''}
                                >
                            <Item label="Top level placeholder" value="id0"/>
                            <Item label="Top level placeholder" value="id1"/>

                        </Picker>
                        <Picker mode="dropdown" placeholder={Strings.SUBMISSION_DETAILS_SUBJECT} note={false}
                                onValueChange={console.log('SUBJECT')}
                                selectedValue={''}
                        >
                            <Item label="Placeholder" value="id0"/>
                            <Item label="Placeholder" value="id1"/>
                        </Picker>

                    <TextInput placeholder='Enter a Description' onChange={()=>console.log("FeedbackBox Inputted")} multiline={true} maxLength={255} width={300}  height={125} autogrow={true}/>
                    </Form>
                </KeyboardAvoidingView>
                <Button style={Styles.requests.submitButton}><Text>{Strings.BUTTONS_SUBMIT}</Text></Button>

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