import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { v4 } from 'uuid';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from "./ContactDetail";

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
            component={(props) => (
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
