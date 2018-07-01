// Import modules.
import React, { Component } from 'react';

// Import styles.
import { Container, Paragraph } from './styles';
import { Heading3 } from '../styles';
import { Link } from '../Button/styles';

// Init component.
class Card extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<Container>
				<Heading3>{this.props.title}</Heading3>
				<Paragraph>{this.props.text}</Paragraph>
				<Link href="/">{this.props.cta}</Link>
			</Container>
		);
	}
}

export default Card;