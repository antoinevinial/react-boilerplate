import ExampleContants from "../constants/Example";
import AppDispatcher from '../dispatcher/AppDispatcher';

// Init actions.
const ExampleActions = {

	getPage(params) {
		console.log('%c ExampleActions => getPage', 'color: #e67e22');
		AppDispatcher.dispatch({
			action: ExampleContants.GET_PAGE,
			params
		});
	}

}

export default ExampleActions;