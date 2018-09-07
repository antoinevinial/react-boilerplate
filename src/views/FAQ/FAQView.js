// Import modules.
import React, { Component } from 'react';

// Import components.
import FAQ from '../../components/FAQ/FAQ';

// Init view.
class FAQView extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<main className="main">
				<div className="grid">
					<FAQ />
				</div>
			</main>
		);
	}
}

export default FAQView;