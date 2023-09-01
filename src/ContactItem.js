import React from 'react';
import axios from 'axios';

function ContactItem({ contact, onDelete }) {
  const handleDelete = () => {
    axios.delete(`/contacts/${contact._id}`)
      .then(() => onDelete(contact._id))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <p>{contact.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ContactItem;
