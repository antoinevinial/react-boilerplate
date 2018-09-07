// Import modules.
import React, { Component } from 'react';

// Init component.
class Cover extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="cover">
				<img className="cover__img" src={`http://placehold.it/${this.props.imageSize}`} alt=""/>
				<div className="cover__container">
					<h1 className="cover__title">{this.props.title}</h1>
					<p className="cover__description">{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default Cover;