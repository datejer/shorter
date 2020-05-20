import React from "react";

class Form extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.state = { url: "" };
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch("/api/link", {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	handleInput(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { url } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="url">URL</label>
				<input value={url} name="url" type="text" onChange={this.handleInput} />

				<button>Generate!</button>
			</form>
		);
	}
}

export default Form;
