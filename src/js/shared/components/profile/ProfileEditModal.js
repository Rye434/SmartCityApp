import React, {Component} from 'react';
import {View, Modal, StyleSheet, Image, Platform, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native';
import * as actions from "../../../shared/actions/Actions"
import {connect} from "react-redux";

import {
    Title,
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Tab,
    Tabs,
    List,
    ListItem,
    Footer,
    Segment,
    Form,
    Item,
    Label,
    Input,
} from 'native-base';


var Strings = require('../../res/strings/StringsEN.js');
var Styles = require('../../res/assets/styles/Styles');

class ProfileEditModal extends Component {

    render() {
        return (

                <Modal
                    visible={this.props.editModal}
                    animationType={'slide'}
                    onRequestClose={this.props.toggleModal}>

                    <Header>
                        <Left>
                            <Button transparent onPress={this.props.toggleModal}>
                                <Text>{Strings.BUTTONS_CANCEL}</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Title>{Strings.PAGE_HEADERS_EDIT}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.props.toggleModal}>
                                <Text>{Strings.BUTTONS_DONE}</Text>
                            </Button>
                        </Right>
                    </Header>

                    <Content>
                        <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                        <Form style={{
                            flex: 1,
                            width: 350,
                            paddingTop: 88,
                            paddingBottom: 48,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Item inlineLabel style={Styles.profileEditModal.firstNameField}>
                                <Label>{Strings.FIELDS_FIRST_NAME}</Label>
                                <Input onChange={() => console.log("First-Name")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.lastNameField}>
                                <Label>{Strings.FIELDS_LAST_NAME}</Label>
                                <Input onChange={() => console.log("LastName")}/>
                            </Item>
                            <Item inlineLabel keyboardType='phone-pad' style={Styles.profileEditModal.phoneField}>
                                <Label>{Strings.FIELDS_PHONE}</Label>
                                <Input onChange={() => console.log("Phone")}/>
                            </Item>
                            <Item inlineLabel keyboardType='email-address' style={Styles.profileEditModal.emailField}>
                                <Label>{Strings.FIELDS_EMAIL}</Label>
                                <Input onChange={() => console.log("Email")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.addressLineField}>
                                <Label>{Strings.FIELDS_ADDRESS}</Label>
                                <Input onChange={() => console.log("Address")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.addressLineSubField}>
                                <Label>{Strings.FIELDS_ADDRESS_LINE2}</Label>
                                <Input onChange={() => console.log("AddressLine")}/>
                            </Item>
                            <Item inlineLabel Label style={Styles.profileEditModal.addressLineSubField}>
                                <Label>{Strings.FIELDS_POSTAL}</Label>
                                <Input onChange={() => console.log("Postal")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.addressLineSubField}>
                                <Label>{Strings.FIELDS_CITY}</Label>
                                <Input onChange={() => console.log("City")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.addressLineSubField}>
                                <Label>{Strings.FIELDS_PROVINCE}</Label>
                                <Input onChange={() => console.log("Province")}/>
                            </Item>
                            <Item inlineLabel style={Styles.profileEditModal.addressLineSubField}>
                                <Label>{Strings.FIELDS_COUNTRY}</Label>
                                <Input onChange={() => console.log("Country")}/>
                            </Item>
                        </Form>
                        </KeyboardAvoidingView>
                    </Content>

                </Modal>
                )}
                }
                function mapStateToProps(state) {
                return{
                editModal: state.editModal,
            }
            }

                const mapDistpatchToProps = (dispatch) => {
                return {
                toggleModal: () => {
                return dispatch(actions.editModal(false))
            },
            }
            };


                export default connect(mapStateToProps,mapDistpatchToProps)(ProfileEditModal);