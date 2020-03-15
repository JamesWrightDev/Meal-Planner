import { all } from "redux-saga/effects";
import recipesWatcher  from "../recipes/sagas";
import mealPlanWatcher from '../mealplan/sagas';

export default function* rootSaga() {
  yield all([
    recipesWatcher(),
    mealPlanWatcher()]);
}
