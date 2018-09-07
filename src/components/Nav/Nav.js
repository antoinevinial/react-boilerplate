// Import modules.
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Init component.
class Nav extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink className="nav__link" exact to="/" activeClassName="is-active">Homepage</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className="nav__link" exact to="/example" activeClassName="is-active">Example</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className="nav__link" exact to="/faq" activeClassName="is-active">FAQ</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;