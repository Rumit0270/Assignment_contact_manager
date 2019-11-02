import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { login } from '../actions/auth';
import './Login.css';

class Login extends React.Component {

    componentDidMount() {
        this.checkIfAuthenticated();
    }

    componentDidUpdate() {
        this.checkIfAuthenticated();
    }

    checkIfAuthenticated() {
        const { authenticated } = this.props;
        if(authenticated) {
            this.props.history.push('/home/contactlist');
        }
    }

    loginWithFbClicked() {
        // TODO:- Show spinner
    }

    fbLoginResponseReceived = (response) => {

        const {
            accessToken,
            userID: userId,
            email,
            name
        } = response;

        const data = { accessToken, userId, email, name }

        if (!userId) {
            return
        }
        this.props.login(data);
    }

    render() {
        return (
            <div className="center">
                <FacebookLogin 
                    appId="430617580865007"
                    autoLoad={true}
                    fields="name,email"
                    onClick={this.loginWithFbClicked}
                    callback={this.fbLoginResponseReceived}
                />
                <div> { this.props.errorMessage } </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        authenticated: state.auth.authenticated
    }
};

export default connect(mapStateToProps, {
    login
})(Login);