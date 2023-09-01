import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the import change

import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
