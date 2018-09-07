// Import modules.
import React, { Component } from 'react';

// Init component.
class FAQSingle extends Component {

	constructor(props) {
		super();

		// Init state.
		this.state = {
			isOpen: false
		};

		// Rebind ES6.
		this.toggleQuestion = this.toggleQuestion.bind(this);
	}

	toggleQuestion() {
		// Update state.
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}

	render() {
		return (
			<li className={`faq__item ${this.state.isOpen ? 'is-open' : ''}`}>
				<button className="faq__btn" onClick={this.toggleQuestion}>{this.props.item.question}</button>
				<p className="faq__text">{this.props.item.answer}</p>
			</li>
		);
	}
}

export default FAQSingle;