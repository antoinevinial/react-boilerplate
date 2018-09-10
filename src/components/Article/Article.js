// Import modules.
import React, { Component } from 'react';

// Init component.
class Article extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<article className="article">
				<img className="article__img" src="http://placehold.it/500x200" alt=""/>
				<h2 className="article__title">{this.props.article.title}</h2>
				<p className="article__text">{this.props.article.body}</p>
				<a className="article__link" href="https://www.google.fr/">Read more</a>
			</article>
		);
	}
}

export default Article;