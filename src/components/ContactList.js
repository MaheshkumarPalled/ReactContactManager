import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

/*Contact list component to create list of available contacts.
Accepts the props from app.js
*/

const ContactList = (props) => {

    // Delete contact handler.
    const deleteContactHandler = (id) => {
        //delete only when double confirms.
        if (window.confirm("Do you really want to delete this contact?")){
            props.getContactID(id);
        }    
    }

    //Render the contacts, pass the properties to Contact card component.
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