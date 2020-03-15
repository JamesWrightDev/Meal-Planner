import { all } from "redux-saga/effects";
import recipesWatcher  from "../sagas/sagas";
import mealPlanWatcher from '../sagas/mealPlanSaga';

export default function* rootSaga() {
  yield all([
    recipesWatcher(),
    mealPlanWatcher()]);
}
