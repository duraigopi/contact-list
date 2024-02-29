import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {contacts: [
				{name: "Contact 1", phone: "9785766545"},
				{name: "Contact 2", phone: "8767565465"}
			]};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(name, phone) {
		if(name===""){
			alert("Enter Name to Save Contact")
		}
		else if(phone===""){
			alert("Enter Phone Number to Save Contact")
		}
		else{
		let contacts = this.state.contacts;
		contacts.unshift({name, phone});
		this.setState({contacts});
		}
	}

	handleDelete(name) {
		let contacts = this.state.contacts;
		contacts = contacts.filter(contact => contact.name !== name);
		this.setState({contacts});
	}

	render() {
		const contacts = this.state.contacts;

		return (
			<div className="contact-list-app">
				<h1 className='header'>Contact List</h1>
				<ContactForm
					onAdd={this.handleAdd}
				/>

                {contacts.length?(
				<>
				{
					contacts.map((contactItem) => {
						return (
							<Contact
								name={contactItem.name}
								phone={contactItem.phone}
								onDelete={this.handleDelete}
							/>
						);
					}) // ;
				}
				</>
				):<h2>No Contacts to Display</h2>}
			</div>
		);
	}
}

export default App;