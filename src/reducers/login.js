import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from '../common/constants';

const initialState = {
  isLogged: false,
  isLoginSubmitted: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogged: false,
        isLoginSubmitted: true
      };
    case LOGIN_SUCCESS:
      return {
        isLogged: true,
        isLoginSubmitted: false
      };
    case LOGIN_ERROR:
      return {
        isLogged: false,
        isLoginSubmitted: false
      };
    default:
      return state
  }
}

export default login;