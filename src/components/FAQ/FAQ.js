// Import modules.
import React, { Component } from 'react';

// Import components.
import FAQSingle from './Single/FAQSingle';

// Init component.
class FAQ extends Component {

	constructor(props) {
		super();

		// Init states.
		this.state = {
			items: [
				{
					question: 'Lorem ipsum dolor sit amet?',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend tortor quis mattis pulvinar. Vestibulum vulputate libero elit, at pretium ipsum tempus id.'
				},
				{
					question: 'Class aptent taciti sociosqu?',
					answer: ' Praesent bibendum vulputate auctor. Nulla ornare metus eget erat sagittis hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
				},
				{
					question: 'Molestie ut pulvinar et?',
					answer: 'Morbi sagittis enim et lacus bibendum dignissim. Nullam neque magna, molestie ut pulvinar et, ultricies vitae risus.'
				},
				{
					question: 'Gravida at ipsum?',
					answer: 'Fusce et blandit arcu, vitae accumsan lectus. Aliquam sem ante, viverra et euismod elementum, gravida at ipsum.'
				}
			]
		};
	}

	buildItems() {
		return this.state.items.map((item, key) => {
			return <FAQSingle key={key} item={item} />
		});
	}

	render() {
		// Build items.
		const Items = this.buildItems();

		// Return component.
		return (
			<section className="faq">
				<ul className="faq__list">
					{Items}
				</ul>
			</section>
		);
	}
}

export default FAQ;