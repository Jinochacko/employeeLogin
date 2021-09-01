import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS
} from '../common/constants';
import data from '../json/data.json';

export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS });
  try {
    dispatch({ type: GET_USERS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: GET_USERS_ERROR });
  }
};