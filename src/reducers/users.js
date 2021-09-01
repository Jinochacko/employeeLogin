import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS
} from '../common/constants';

const initialState = {
  list: {
    data: [],
    isFetching: false,
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        list: {
          ...state.list,
          isFetching: true
        }
      };
    case GET_USERS_SUCCESS:
      return {
        list: {
          data: action.payload,
          isFetching: false
        }
      };
    case GET_USERS_ERROR:
      return {
        list: {
          data: [],
          isFetching: false
        }
      };
    default:
      return state
  }
}

export default users;