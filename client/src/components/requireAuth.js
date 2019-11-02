import React from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {

    class ComposedComponent extends React.Component {

        componentDidMount() {
            this.checkIfUserIsAuthenticated()
        }

        componentDidUpdate() {
            this.checkIfUserIsAuthenticated()
        }

        checkIfUserIsAuthenticated() {
            if(!this.props.auth.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps, null)(ComposedComponent);
};

export default requireAuth;