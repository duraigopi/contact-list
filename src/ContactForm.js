import React from 'react';
import addContact from './add-contact.svg'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', phone: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	}

	handleSubmit(event) {
		const {name, phone} = this.state;
		this.props.onAdd(name, phone);
		this.setState({name: '', phone: ''});
		event.preventDefault();
	}

	render() {
		return (
			<div id="contact-form">
				<form>
					<div className="form-fields">
						<label htmlFor="name">
							<span>Name:</span>
							<input type='text' name="name" value={this.state.name} onChange={this.handleChange} />
						</label>
						<label htmlFor="phone">
							<span>Number:</span>
							<input type='tel' name="phone" value={this.state.phone} onChange={this.handleChange} />
						</label>
					</div>

					<img className="btn-img1" src={addContact} alt="addContact" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default ContactForm;