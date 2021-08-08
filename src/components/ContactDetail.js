import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

//Contact details component to display the selected component in card format.
const ContactDetails = (props) => {

    const {name, email} = props.location.state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header"> Name : {name} </div>
                    <div className="description"> Email : {email} </div>
                </div>
            </div>
            <div className = "center-div">
                <Link to="/">
                <button className = "ui button blue centered"> Back to contact list </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;
