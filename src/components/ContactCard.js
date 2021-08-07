import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div key={id} className="item">
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <div className="header"> <h3> {name}  </h3></div>
                <div > {email} </div>
            </div> 
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "10px" , alignSelf:"flex-end"}} onClick = {()=> props.clickHandler(id)}></i>
        </div>
    );

}

export default ContactCard;
