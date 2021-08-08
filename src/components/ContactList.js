import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }
    const renderContactsCard = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        )
    })

    return (
        <div class="main">
            <div class="container">
                <h2> Contact list </h2>
                <Link to="/add"> <button className="ui button blue right"> + Add Contact</button> </Link>
                
            </div>

            <div className="ui celled list"> {renderContactsCard} </div>
        </div>

    )
}
export default ContactList;