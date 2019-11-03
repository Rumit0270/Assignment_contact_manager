import React from 'react';
import { Accordion, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhone, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contact';
import './Contact.css';
import { toast } from 'react-toastify';
class Contact extends React.Component {

    handleDeleteContact = () => {
        const contactId = this.props.contact.id;
        this.props.deleteContact(contactId);
        toast.success('Contact deleted successfully!');
    }

    handleEditContact = () => {
        const contactId = this.props.contact.id;
        this.props.history.push(`/home/contactedit/${contactId}`);
    }

    render() {
        const { name, email, phone } = this.props.contact;

        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={email}>
                        <h5> { name } </h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={email}>
                    <Card.Body>
                        <FontAwesomeIcon icon={faEnvelopeSquare} /> { email } <br/>
                        <FontAwesomeIcon icon={faPhone} /> { phone }
                        <br/>
                        <div className="ml-auto">
                        <Button style={{ marginRight: '15px'}} onClick={this.handleEditContact}> <FontAwesomeIcon icon={faUserEdit} /> </Button>
                        <Button onClick={this.handleDeleteContact} className="btn btn-danger"> <FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
};

export default connect(null, {
    deleteContact
})(Contact);