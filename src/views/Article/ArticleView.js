// Import modules.
import React, { Component } from 'react';

// Import actions.
import ArticleActions from '../../actions/Article';

// Import stores.
import ArticleStore from '../../stores/Article';

// Import components.
import Article from '../../components/Article/Article';

// Init view.
class ArticleView extends Component {

	constructor(props) {
		super();

		// Init state.
		this.state = {
			article: null
		};

		// Rebind ES6.
		this.getArticleHandler = this.getArticleHandler.bind(this);
	}

	componentDidMount() {
		// Get page.
		ArticleActions.getArticle({
			id: 1
		});
		
		// Add listeners.
		ArticleStore.addListener('article:getArticle', this.getArticleHandler);
	}

	componentWillUnmount() {
		// Remove listeners.
		ArticleStore.removeListener('article:getArticle', this.getArticleHandler);
	}

	getArticleHandler(res) {
		// Update state.
		this.setState({
			article: res
		});
	}

	render() {
		return (
			<main className="main">
				<div className="grid">

					{/* Content */}
					{this.state.article ?
						<Article article={this.state.article}/>
					:
						'Loading...'
					}

				</div>
			</main>
		);
	}
}

export default ArticleView;