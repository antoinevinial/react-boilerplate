// Import modules.
import React, { Component } from 'react';

// Import components.
import Cover from '../../components/Cover/Cover';

// Init view.
class HomeView extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<main className="main">
				<div className="grid">

					{/* Cover */}
					<Cover title="Homepage" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." imageSize="1280x500"/>

				</div>
			</main>
		);
	}
}

export default HomeView;