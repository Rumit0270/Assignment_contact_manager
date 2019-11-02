import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateContact } from '../actions/contact';

const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
    return (
        <Form.Control
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            value={input.value}
            onChange={input.onChange}
            />
    )
}
class ContactEdit extends React.Component {

    onSubmit = (formProps) => {
        const id = this.props.match.params.id;
        const { name, email, phone } = formProps;
        const data = { name, email, phone };

        this.props.updateContact(id, data, () => {
            this.props.history.push('/home/contactlist');
        });
    }

    render() {
        // handleSubmit is a function provided by redux form for handling
        // form submission
        const { handleSubmit } = this.props; 

        return (
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
                    type="text"
                    component={FieldInput}
                    autoComplete="none"
                    placeholder="Phone"
                />
                </Form.Group>
                <Button type="submit" className="btn btn-primary">Add</Button>
            </Form>
        );
    }
}



export default compose(
    connect(null, {
        updateContact
    }),
    reduxForm({ form: 'editContac' })
)(ContactEdit);