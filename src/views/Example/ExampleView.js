// Import modules.
import React, { Component } from 'react';

// Import actions.
import ExampleActions from '../../actions/Example';

// Import stores.
import ExampleStore from '../../stores/Example';

// Init view.
class ExampleView extends Component {

	constructor(props) {
		super();

		// Init state.
		this.state = {
			content: null
		};

		// Rebind ES6.
		this.getPageHandler = this.getPageHandler.bind(this);
	}

	componentDidMount() {
		// Get page.
		ExampleActions.getPage();
		
		// Add listeners.
		ExampleStore.addListener('example:getPage', this.getPageHandler);
	}

	componentWillUnmount() {
		// Remove listeners.
		ExampleStore.removeListener('example:getPage', this.getPageHandler);
	}

	getPageHandler(res) {
		// Update state.
		this.setState({
			content: res
		});
	}

	render() {
		return (
			<main className="main">
				<div className="grid">

					{/* Title */}
					<h1>Example view</h1>

					{/* Content */}
					{this.state.content ? this.state.content : ''}

				</div>
			</main>
		);
	}
}

export default ExampleView;