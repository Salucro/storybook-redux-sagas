import { all, call } from "redux-saga/effects";
import userSaga from "./user.saga";

export default function* rootSaga(): IterableIterator<{}> {
  yield all([call(userSaga)]);
}
