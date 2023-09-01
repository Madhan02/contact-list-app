import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/contacts', formData)
      .then(() => {
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Create/Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ContactForm;
