// Import modules.
import React, { Component } from 'react';

// Init component.
class Image extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<img className="image" src="http://placehold.it/1000x500"/>
		);
	}
}

export default Image;