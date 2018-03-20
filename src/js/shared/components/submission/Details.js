import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Spinner, Form, Picker, Item } from 'native-base';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";

var Strings = require('../../res/strings/StringsEN');



//TODO: add issue submission confirmation alert


let iconTest = <Icon name='square'/>

class Details extends Component {

    render() {
        return(
            <View
                style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'column',}}>

                <Image source={{uri: 'http://via.placeholder.com/250x375'}}  style={{height: 250, width: 500}}/>

                {/*<Form>*/}
                    {/*<Picker mode="dropdown" placeholder="Select A Department" note={false}*/}
                            {/*onValueChange={console.log('dicks')}*/}
                            {/*// selectedValue={this.state.selected2}*/}
                            {/*>*/}
                        {/*<Item label="Top level placeholder" value="id0"/>*/}

                    {/*</Picker>*/}
                    {/*<Picker mode="dropdown" placeholder="Select A Subject" note={false}*/}
                            {/*onValueChange={console.log('dicks2')}*/}
                        {/*// selectedValue={this.state.selected2}*/}
                    {/*>*/}
                        {/*<Item label="Placeholder" value="id0"/>*/}
                    {/*</Picker>*/}
                {/*</Form>*/}



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