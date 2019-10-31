import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact';

class ContactList extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    renderContacts() {
        const { contacts } = this.props;
        if(!contacts) {
            return (
                <div>No contacts added yet!</div>
            )
        }

        return(
            JSON.stringify(contacts)
        );
    }

    render() {
        return (
            <div>Contact List { JSON.stringify(this.props.contacts)} </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, {
    fetchContacts
})(ContactList);