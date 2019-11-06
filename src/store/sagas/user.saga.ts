import { takeEvery, call, put } from "redux-saga/effects";
import {
  SET_SEARCH_STR,
  FETCH_USERS,
  ADD_USERS
} from "../reducers/userReducer";
import { fetchAllUsers, fetchUserByUsername } from "src/code/api";

function* requestUsers(action) {
  try {
    const response = yield call(fetchUserByUsername, action.payload.searchStr);
    if (response && response.data) {
      yield put({ type: ADD_USERS, payload: { users: [response.data] } });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchUsers() {
  try {
    const response = yield call(fetchAllUsers);
    if (response && response.data) {
      yield put({ type: ADD_USERS, payload: { users: response.data } });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(SET_SEARCH_STR, requestUsers);
  yield takeEvery(FETCH_USERS, fetchUsers);
}
