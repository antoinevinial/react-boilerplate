// Import modules.
import AppDispatcher from '../dispatcher/AppDispatcher';
import Store from '../mixins/Store';

// Import Constants
import ArticleConstants from '../constants/Article';

// Article Store
class ArticleStore extends Store {

	constructor () {
		super();

		this.dispatchToken = AppDispatcher.register((payload) => {
			const {action, params} = payload;

			switch(action) {
				case ArticleConstants.GET_ARTICLE:
					this.getArticle(params);
					break;
				default:
					break;
			}

			return true;
		});
	}

	getArticle(params) {
		console.log('%c ArticleStore => getArticle', 'color: green');

		// Fetch API.
		this.fetchAPI('GET', `${this._api}/posts/${params.id}`, null, (res) => {
			
			// Emit event.
			this.emit('article:getArticle', res);

		});

	}

}

export default new ArticleStore();