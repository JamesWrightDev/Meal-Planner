import { all } from "redux-saga/effects";
import { combineReducers } from 'redux';

import recipesWatcher  from "../recipes/sagas";
import mealPlanWatcher from '../mealplan/sagas';
import recipeReducer from "../recipes/reducer";
import mealPlanReducer from "../mealplan/reducer";

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  mealPlan: mealPlanReducer
});

export function* rootSaga() {
  yield all([
    recipesWatcher(),
    mealPlanWatcher()]);
}
