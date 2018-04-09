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


let departments;
let subjects;
let categories;

let button;



class Details extends Component {

    componentWillMount(){
        this.props.buildDepartment(this.props.storeServices)
    }

    setActiveAndBuildSubject =(value)=>{
        this.props.setActiveDepartment(value)
        this.props.reset()
        this.props.buildSubject(value, this.props.department)
    }

    setActiveAndBuildCategory =(value)=> {
        this.props.setActiveSubject(value)
        this.props.buildCategory(value, this.props.subject)
    }

    render() {
        if(this.props.department != null){
            departments =
                <Picker mode="dropdown" placeholder={Strings.SUBMISSION_DETAILS_DEPARTMENT} note={false}
                        onValueChange={(value)=>this.setActiveAndBuildSubject(value)}
                        selectedValue={this.props.activeDepartment}
                >
                    {Object.keys(this.props.department).map(function (item) {
                        return(
                            <Item key={item} label={this.props.department[item].description} value={this.props.department[item].id}/>
                        )
                    }.bind(this))}
                </Picker>
        }
        if(this.props.subject != null)
            subjects =
                <Picker mode="dropdown" placeholder={Strings.SUBMISSION_DETAILS_SUBJECT} note={false}
                        onValueChange={(value)=>this.setActiveAndBuildCategory(value)}
                        selectedValue={this.props.activeSubject}
                >
                    {Object.keys(this.props.subject).map(function (item) {
                        return(
                            <Item key={item} label={this.props.subject[item].description} value={this.props.subject[item].code}/>
                        )
                    }.bind(this))}

                </Picker>
        if(this.props.activeCategory == null){
            categories = <Text/>;
        }

        if(this.props.category != null && this.props.category.length > 0){
            categories=
                <Picker mode="dropdown" placeholder={Strings.SUBMISSION_DETAILS_SUBJECT} note={false}
                        onValueChange={(value)=>this.props.setActiveCategory(value)}
                        selectedValue={this.props.activeCategory}
                >
                    {Object.keys(this.props.category).map(function (item) {
                        return(
                            <Item key={item} label={this.props.category[item].name} value={this.props.category[item].key}/>
                        )
                    }.bind(this))}

                </Picker>
        }



        return(
            <View
                style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'column',}}>

                <Image source={{uri: 'http://via.placeholder.com/250x375'}}  style={{height: 250, width: 500}}/>
                <KeyboardAvoidingView style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} behavior="padding">
                    <Form>
                        {departments}
                        {subjects}
                        {categories}

                    <TextInput placeholder='Enter a Description' onChangeText={(text)=>this.props.setSubmitIssueDescription(text)} multiline={true} maxLength={255} width={300}  height={125} autogrow={true}/>
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
        responseCodeProfile: state.responseCodeProfile,
        storeServices: state.storeServices.list,
        department: state.department,
        activeDepartment: state.activeDepartment,
        subject: state.subject,
        activeSubject: state.activeSubject,
        category: state.category,
        activeCategory: state.activeCategory,
        submissionIssueDescription: state.submissionIssueDescription
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        cachePhoto: (obj) => {
            return dispatch(actions.cachePhoto(obj))
        },
        buildDepartment: (list) => {
            dispatch(actions.buildDepartment(list))
        },
        setActiveDepartment: (value) => {
            dispatch(actions.setActiveDepartment(value))
        },
        buildSubject: (departmentId, departmentList) => {
            dispatch(actions.buildSubject(departmentId, departmentList))
        },
        setActiveSubject: (value) => {
            dispatch(actions.setActiveSubject(value))
        },
        buildCategory: (value, subjects) => {
            dispatch(actions.buildCategory(value, subjects))
        },
        setActiveCategory: (value) => {
            dispatch(actions.setActiveCategory(value))
        },
        reset: () => {
            dispatch(actions.reset())
        },
        setSubmitIssueDescription: (text) => {
            dispatch(actions.setSubmitIssueDescription(text))
        }
    }
}



export default connect(mapStateToProps,mapDistpatchToProps)(Details)