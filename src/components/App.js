import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 } from 'uuid';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {

  const LOCAL_STORAGE_KEY = "contact";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: v4(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactID = {removeContactHandler}/>

    </div>
  );
}

export default App;
