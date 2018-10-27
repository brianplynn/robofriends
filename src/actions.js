import { 
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED, 
} from "./constants.js";

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCHFIELD,
		payload: text
	}
}

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING});
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(res => res.json())
		.then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users}))
		.catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
	}