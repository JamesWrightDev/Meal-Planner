import { takeLatest, put } from "redux-saga/effects";
import { FETCH_RECIPES } from "../constants/index";
import { fetchRecipesSuccess } from "../actions/index";

const fetchReceipes = function*() {
  const baseUrl = "https://mighty-retreat-69650.herokuapp.com";

  const recipes = yield fetch(`${baseUrl}/recipes`).then(response =>
    response.json()
  );

  yield put(fetchRecipesSuccess(recipes));
};

export default function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
