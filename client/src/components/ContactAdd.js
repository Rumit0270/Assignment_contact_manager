import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addContact } from '../actions/contact'
import FieldInput from './FieldInput';
import { toast } from 'react-toastify';
class ContactAdd extends React.Component {

    onSubmit = (formProps) => {
        const { name, email, phone } = formProps;
        const data = { name, email, phone };

        this.props.addContact(data, () => {
            this.props.history.push('/home/contactlist');
            toast.success('Contact added successfully!');
        });
    }

    render() {
        // handleSubmit is a function provided by redux form for handling
        // form submission
        const { handleSubmit } = this.props; 

        return (
            <div className="jumbotron">
                <h3>Add a new contact</h3>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                <Form.Group>
                    <Field 
                        name="name"
                        type="text"
                        component={FieldInput}
                        autoComplete="none"
                        placeholder="Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Field 
                        name="email"
                        type="text"
                        component={FieldInput}
                        autoComplete="none"
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group>
                <Field 
                    name="phone"
                    type="number"
                    component={FieldInput}
                    autoComplete="none"
                    placeholder="Phone"
                />
                </Form.Group>
                <Button type="submit" className="btn btn-primary">Add</Button>
            </Form>
            </div>

        );
    }
}



export default compose(
    connect(null, {
        addContact
    }),
    reduxForm({ form: 'addContact' })
)(ContactAdd);