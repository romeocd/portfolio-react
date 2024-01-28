import React, { useState } from 'react';
import Card from './Card';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !value ? 'Name is required' : '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is not valid';
        return '';
      case 'message':
        return !value ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const fieldError = validateField(name, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Reset form or give a success message
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    ['name', 'email', 'message'].forEach(name => {
      tempErrors[name] = validateField(name, formData[name]);
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <Card>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </Card>
  );
};

export default Contact;