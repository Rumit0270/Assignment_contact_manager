import React from 'react';
import { Form } from 'react-bootstrap';

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
};

export default FieldInput;