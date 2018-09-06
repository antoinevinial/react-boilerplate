// Import modules.
import React, { Component } from 'react';

// Init view.
class NoMatchView extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<main className="main">
				<div className="grid">
					<h1>404</h1>
				</div>
			</main>
		);
	}
}

export default NoMatchView;