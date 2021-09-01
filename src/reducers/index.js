import { combineReducers } from 'redux';
import login from './login';
import users from './users';

const reducers = combineReducers({
	login,
  	users,
});

export default reducers;
