import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { v4 } from 'uuid';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from "./ContactDetail";

function App() {

  // Constant for the local storage
  const LOCAL_STORAGE_KEY = "contact";

  //Hooks for the contacts.
  const [contacts, setContacts] = useState([]);

  // Handler to add contacts.
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: v4(), ...contact }]);
  }

  //Handler to remove contacts from the list and update the available contacts.
  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  }

  //Effect hook to retrieve available contacts.
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, [])

  //Effect hook to store the contacts in local storage.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/add"
            exact
            render={(props) => (
              <AddContact
                {...props}
                addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/"
            exact
            render={(props) => (
              <ContactList {...props}
                contacts={contacts}
                getContactID={removeContactHandler} />
            )}
          />

        <Route 
        path ="/contact/:id" 
        component = {ContactDetails} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
