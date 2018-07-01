// Import modules.
import React, { Component } from 'react';

// Import styles.
import { Container, Round } from './styles';

// Init component.
class Switch extends Component {

	constructor(props) {
		super(props);

		// Init state.
		this.state = {
			isActive: false
		};

		// Rebind ES6.
		this.toggleSwitch = this.toggleSwitch.bind(this);
	}

	toggleSwitch() {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}), () => {
			this.props.toggleSwitch(this.state.isActive);
		});
	}

	render() {
		return (
			<Container onClick={this.toggleSwitch}>
				<Round active={this.state.isActive}/>
			</Container>
		);
	}
}

export default Switch;