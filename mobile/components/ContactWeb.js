import React from 'react';
import { WebView } from 'react-native';

class ContactWeb extends React.Component {

    render() {
        return (
            <WebView 
                source={{ uri: 'https://contact-manager-node-react.herokuapp.com'}}
                style={{ marginTop: 30 }}
            />
        );
    }
}

export default ContactWeb;