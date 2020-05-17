import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateContact } from '../../actions/contact';
import FieldInput from '../FieldInput';
import { toast } from 'react-toastify';

class ContactEdit extends React.Component {
  onSubmit = (formProps) => {
    const id = this.props.match.params.id;
    const { name, email, phone } = formProps;
    const data = { name, email, phone };

    this.props.updateContact(id, data, () => {
      this.props.history.push('/home/contactlist');
      toast.success('Contact updated successfully!');
    });
  };

  render() {
    // handleSubmit is a function provided by redux form for handling
    // form submission
    const { handleSubmit } = this.props;

    return (
      <div className="jumbotron">
        <h3> Update the contact</h3>
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
          <Button type="submit" className="btn btn-primary">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const contact = state.contacts.find((contact) => +contact.id === +id);
  if (contact) {
    return {
      initialValues: {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      },
    };
  }
};

export default compose(
  connect(mapStateToProps, {
    updateContact,
  }),
  reduxForm({ form: 'editContact', enableReinitialize: true })
)(ContactEdit);
