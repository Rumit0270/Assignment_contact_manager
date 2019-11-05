import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ContactLocal extends React.Component {

    render() {
        return (
            <Text>Contact Local</Text>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ContactLocal;