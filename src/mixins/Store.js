// Import modules.
import { EventEmitter } from 'events';
import 'whatwg-fetch';

// Init module.
class Store extends EventEmitter {

	constructor() {
		super();
		this._api = `${process.env.REACT_APP_API_URL}`;
		this.setMaxListeners(1000);
	}

	fetchAPI(method, url, data, callback = {}) {
		// Create newUrl.
		let newUrl = url;

		// If data is already fetching, return.
		if (this.isDataFetching(newUrl)) return;

		// Add item loading.
		this.addItemLoading(newUrl);

		// Init status variable.
		let status = null;

		// Init params object.
		let params = {
			method: method,
			headers: { 
				'Content-Type': 'application/json'
			}
		};

		// If method is a POST, PUT or PATCH, add body.
		if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
			params.body = JSON.stringify(data);
		}

		// Launch fetch request.
		fetch(newUrl, params).then((res) => {

			// Get status.
			status = res.status;

			// Remove item loading.
			this.removeItemLoading(newUrl);
			
			// If we have something different than OK status.
			if (status !== 204) {
				return res.json();
			} else {
				callback();
			}

		}).then((json) => {

			// If json exists, return it with callback.
			if (json) callback(json);

		});
	}

	isDataFetching(url) {
		// Get fetch array.
		let fetch = window.reactBoilerplate.fetch;

		// If fetch array is empty, return.
		if (!fetch.length) return false;

		// Init isFetching variable.
		let isFetching = false;

		// Loop through each fetch. If find same one, update isFetching variable.
		for (let i = 0, j = fetch.length; i < j; i++) {
			if (fetch[i] === url) {
				isFetching = true;
			}
		}

		// Return isFetching variable.
		return isFetching;
	}

	addItemLoading(url) {
		// Create event.
		const event = new CustomEvent('loader:addItem');

		// Update fetch array.
		window.reactBoilerplate.fetch.push(url);

		// Dispatch event.
		window.dispatchEvent(event);
	}

	removeItemLoading(url) {
		// Create event.
		const event = new CustomEvent('loader:removeItem');

		// Get index for url.
		const index = window.reactBoilerplate.fetch.indexOf(url);

		// Remove url inside fetch array.
		window.reactBoilerplate.fetch.splice(index, 1);

		// Dispatch event.
		window.dispatchEvent(event);
	}
}

export default Store;
