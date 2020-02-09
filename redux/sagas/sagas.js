
import {
  FETCH_RECIPES
} from '../constants/index'
import { fetchRecipesSuccess } from '../actions/index'
import { takeLatest, put, call } from 'redux-saga/effects'

const fetchReceipes = function* () {
  const base_url = "https://mighty-retreat-69650.herokuapp.com"

  const recipes = yield fetch(`${base_url}/recipes`)
  .then(response => response.json());

  yield put( fetchRecipesSuccess(recipes) );

}

export function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
