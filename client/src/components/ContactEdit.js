import React from 'react';

class ContactEdit extends React.Component {

    render() {
        const id = this.props.match.params.id;
        return (
            <div>Contact Edit Component</div>
        );
    }
}

export default ContactEdit;