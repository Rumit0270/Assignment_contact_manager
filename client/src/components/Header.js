import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { compose } from 'redux';
import requireAuth from './requireAuth';
class Header extends React.Component {

    addContact = () => {
        this.props.history.push('/home/contactadd');
    }

    logout = () => {
        this.props.logout(() => {this.props.history.push('/');});
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ color: 'red' }} href="/home/contactlist">Contact Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button variant="link" onClick={this.addContact}> <FontAwesomeIcon icon={faUserPlus} /> Add Contact </Button>
                        <Button variant="link" onClick={this.logout}> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default compose(connect(null , {
    logout
}), requireAuth)(Header);