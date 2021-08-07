import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }

    const renderContactsCard = props.contacts.map((contact) => {
        return(
            <ContactCard contact = {contact} clickHandler = {deleteContactHandler}/>
        )
    })
    
    return (
        <div className = "ui celled list">
            <h2> Retutn UI Contact lists..! </h2>
            {renderContactsCard}
        </div>
    )
}
export default ContactList;