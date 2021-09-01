import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from '../common/constants';
import data from '../json/login.json';

export const login = ({username, password}) => async dispatch => {
  dispatch({ type: LOGIN });
  try {
  	if(data.username == username && data.password == password){
    	dispatch({ type: LOGIN_SUCCESS });
    } else {
    	alert("Incorrect username or password");
    	dispatch({ type: LOGIN_ERROR });
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};