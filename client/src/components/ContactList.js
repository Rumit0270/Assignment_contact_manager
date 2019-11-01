import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact';
import { Accordion } from 'react-bootstrap';
import Contact from './Contact';

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
            <Accordion>
                { contacts.map(contact => {
                    return <Contact key={contact.email} contact={contact}/>
                }) }
            </Accordion>
        );
    }

    render() {
        return (
            <div className="jumbotron">
                { this.renderContacts() }
            </div>
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