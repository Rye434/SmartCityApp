import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';


export default class FabButton extends Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <Fab
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={console.log('FAB pressed')}>
                        <Icon name="camera" />
                    </Fab>
                </View>
            </Container>
        );
    }
}