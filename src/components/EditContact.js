import React from 'react';

// Class component to add the contact to a list.
class EditContact extends React.Component {

    //Constructor fir the conponent.
    constructor(props){
        super(props);
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        }
    }

    //function to add the entered name and email details in the add contacts page.
    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:"", email:""});
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="ui main" key={this.state.id}>
                <h2> Edit contact </h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className=" ui field">
                        <label> Full name : </label>
                        <input type="text" name="name" placeholder="Enter fullname " value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label> Email ID : </label>
                        <input type="text" name="email ID" placeholder="Enter email ID " value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="field">
                        <button className="ui button blue"> Update </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditContact;