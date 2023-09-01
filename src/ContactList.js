import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/contacts')
      .then((response) => setContacts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
