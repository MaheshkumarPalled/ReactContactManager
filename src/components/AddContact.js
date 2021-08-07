import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
    }

    render() {
        return (
            <div className="ui main">
                <h2> Add a contact </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className=" ui field">
                        <label> Full name : </label>
                        <input type="text" name="name" placeholder="Enter fullname " value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label> Email ID : </label>
                        <input type="text" name="email ID" placeholder="Enter email ID " value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="field">
                        <button className="ui button blue"> Add </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;