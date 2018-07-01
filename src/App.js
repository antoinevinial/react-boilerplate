import React, { Component } from 'react';

// Import components.
import Switch from './Components/Switch';

// Init application.
class App extends Component {

	constructor(props) {
		super(props);

		// Rebind ES6.
		this.toggleSwitch = this.toggleSwitch.bind(this);
	}

	toggleSwitch(isActive) {
		
	}

	render() {
		return (
			<div className="App">
				<Switch toggleSwitch={this.toggleSwitch}/>
			</div>
		);
	}
}

export default App;