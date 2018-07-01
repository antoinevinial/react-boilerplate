import React, { Component } from 'react';

// Import styles.
import { Application, Section, Heading2 } from './Components/styles';

// Import components.
import Switch from './Components/Switch';
import FormSelect from './Components/Form/Select';
import Card from './Components/Card';

// Init application.
class App extends Component {

	constructor(props) {
		super(props);

		// Init state.
		this.state = {
			isActive: false,
			selectedValue: 'value 1'
		};

		// Rebind ES6.
		this.toggleSwitch = this.toggleSwitch.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	toggleSwitch(isActive) {
		this.setState({
			isActive: isActive
		});
	}

	onChange(value) {
		this.setState({
			selectedValue: value
		});
	}

	render() {
		return (
			<Application>
				<Section>
					<Heading2>Toggle Switch</Heading2>
					<Switch toggleSwitch={this.toggleSwitch}/>
					{`isActive : ${this.state.isActive}`}
				</Section>
				<Section>
					<Heading2>Select</Heading2>
					<FormSelect options={['value 1', 'value 2', 'value 3']} onChange={this.onChange}/>
					{`Select : ${this.state.selectedValue}`}
				</Section>
				<Section>
					<Heading2>Card</Heading2>
					<Card title="My card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla nisl id metus euismod lacinia. In hac habitasse platea dictumst." cta="Discover"/>
				</Section>
			</Application>
		);
	}
}

export default App;