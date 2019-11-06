import { UserProps } from "src/Users/User";

const initialState = {
  searchStr: "",
  users: [] as UserProps[]
};

export const ADD_USERS = "ADD_USERS";
export const REQUEST_USERS = "REQUEST_USERS";
export const SET_SEARCH_STR = "SET_SEARCH_STR";
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const addUsers = (payload: any) => ({
  type: ADD_USERS,
  payload: payload.data
});

export const setSearchStr = payload => ({
  type: SET_SEARCH_STR,
  payload
});

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: action.payload.users
      };

    case SET_SEARCH_STR:
      return {
        ...state,
        searchStr: action.payload.searchStr
      };

    default:
      return state;
  }
};
