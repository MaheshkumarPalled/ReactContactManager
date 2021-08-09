import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

//Contact card component.
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div key={id} className="item">
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact }}}>
                    <div className="header"> <h3> {name}  </h3></div>
                    <div > {email} </div>
                </Link>
            </div>
            <Link to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}>
                <i className="edit alternate outline icon" style={{ color: "blue", marginTop: "10px", alignSelf: "flex-end" }}></i>
            </Link>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "10px", alignSelf: "flex-end", marginLeft: "10px" }} onClick={() => props.clickHandler(id)}></i>
        </div>
    );

}

export default ContactCard;
