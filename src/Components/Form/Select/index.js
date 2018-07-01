// Import modules.
import React, { Component } from 'react';

// Import styles.
import { Container, Select } from './styles';

// Init component.
class FormSelect extends Component {

	constructor(props) {
		super();

		// Rebind ES6.
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e) {
		// Get value.
		const value = e.target.value;

		// Send value to parent.
		this.props.onChange(value);
	}

	buildOptions() {
		return this.props.options.map((option, key) => {
			return <option value={option} key={key}>{option}</option>;
		});
	}

	render() {
		// Build Options.
		const Options = this.buildOptions();

		// Return component.
		return (
			<Container>
				<Select onChange={this.onChangeHandler}>
					{Options}
				</Select>
			</Container>
		);
	}
}

export default FormSelect;