// Import modules.
import React, { Component } from 'react';

// Import components.
import Nav from '../Nav/Nav';

// Init component.
class Header extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<header className="header">
				<div className="grid">
					<div className="header__container">
						<span className="header__logo">Logo</span>
						<Nav />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;