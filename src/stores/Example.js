// Import modules.
import AppDispatcher from '../dispatcher/AppDispatcher';
import Store from '../mixins/Store';

// Import Constants
import ExampleConstants from '../constants/Example';

// Example Store
class ExampleStore extends Store {

	constructor () {
		super();

		this.dispatchToken = AppDispatcher.register((payload) => {
			const {action, params} = payload;

			switch(action) {
				case ExampleConstants.GET_PAGE:
					this.getPage(params);
					break;
				default:
					break;
			}

			return true;
		});
	}

	getPage(params) {
		console.log('%c ExampleStore => getPage', 'color: green');

		// Fetch API.
		this.fetchAPI('GET', `${this._api}/example`, null, (res) => {
			
			// Emit event.
			this.emit('example:getPage', res);

		});

	}

}

export default new ExampleStore();