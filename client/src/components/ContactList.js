import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact';
import { Accordion } from 'react-bootstrap';
import Contact from './Contact';
import './ContactList.css';

class ContactList extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    renderContacts() {
        const { contacts } = this.props;
        console.log(contacts)
        if(contacts && contacts.length > 0) {
            return(
                <Accordion>
                    { contacts.map(contact => {
                        return <Contact { ...this.props} key={contact.id} contact={contact}/>
                    }) }
                </Accordion>
            );
        } else {
            return (
                <h4 className="nocontact">No contacts added yet!</h4>
            )
        }
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