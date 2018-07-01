import React, { Component } from 'react';

// Import styles.
import { Application, Section, Cell } from './Components/styles';

// Import components.
import Switch from './Components/Switch';
import FormSelect from './Components/Form/Select';

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
					<Cell>
						<Switch toggleSwitch={this.toggleSwitch}/>
					</Cell>
					<Cell>
						{`isActive : ${this.state.isActive}`}
					</Cell>
				</Section>
				<Section>
					<Cell>
						<FormSelect options={['value 1', 'value 2', 'value 3']} onChange={this.onChange}/>
					</Cell>
					<Cell>
						{`Select : ${this.state.selectedValue}`}
					</Cell>
				</Section>
			</Application>
		);
	}
}

export default App;