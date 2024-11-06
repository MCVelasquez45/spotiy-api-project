// src/components/FormControl/FormControl.js
import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './FormControl.css'; // Import a CSS file for additional styles if needed

const FormControlComponent = ({ value, onChange, placeholder, buttonText, onButtonClick }) => {
  return (
    <InputGroup className="mb-3"> {/* Using InputGroup to combine input and button */}
      <Form.Control
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-form-control" // Adding a custom class for additional styling
      />
    
    </InputGroup>
  );
};

export default FormControlComponent;

