import { all } from "redux-saga/effects";
import recipesWatcher  from "../sagas/sagas";

export default function* rootSaga() {
  yield all([recipesWatcher()]);
}
