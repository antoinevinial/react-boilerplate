// Import modules.
import ArticleContants from "../constants/Article";
import AppDispatcher from '../dispatcher/AppDispatcher';

// Init actions.
const ArticleActions = {

	getArticle(params) {
		console.log('%c ArticleActions => getArticle', 'color: #e67e22');
		AppDispatcher.dispatch({
			action: ArticleContants.GET_ARTICLE,
			params
		});
	}

}

export default ArticleActions;