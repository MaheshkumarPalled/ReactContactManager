import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { v4 } from 'uuid';
import api from "../api/contacts"
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from "./ContactDetail";
import { uuid } from 'uuidv4';
import EditContact from './EditContact';

function App() {

  // Constant for the local storage
  const LOCAL_STORAGE_KEY = "contact";

  //Hooks for the contacts.
  const [contacts, setContacts] = useState([]);

  //Get all the contacts from get:/contacts api.
  const getAllContacts = async () => {
    const resposne = await api.get("/contacts");
    return resposne.data;
  }

  // Handler to add contacts.
  const addContactHandler = async (contact) => {
    const request = {
      id : uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  }

  //handler to update the existing contact. 
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    //destructure the props.
    const {id, name, email} = response.data;
    setContacts(
      //update the contact only which is requested for update.
      contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
    })
    );
  };

  //Handler to remove contacts from the list and update the available contacts.
  const removeContactHandler = async (id) => {
    //call the delete api.
    await api.delete(`/contacts/${id}`);
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  }

  //Effect hook to retrieve available contacts.
  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContactsFromAPI = async () => {
      const allContacts = await getAllContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContactsFromAPI();
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
          <Route path="/edit"
            render={(props) => (
              <EditContact 
              {...props}
              updateContactHandler={updateContactHandler} />
            )}
          />

        <Route 
        path ="/contact/:id" 
        exact
        component = {ContactDetails} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
