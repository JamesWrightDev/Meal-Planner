import { takeLatest, put } from "redux-saga/effects";
import { FETCH_RECIPES } from "../constants/index";
import { fetchRecipesSuccess } from "./actions";

const fetchReceipes = function*() {
  const baseUrl = "http://192.168.0.105:1337";

  const recipes = yield fetch(`${baseUrl}/recipes`).then(response =>
    response.json()
  );
  yield put(fetchRecipesSuccess(recipes));
};

export default function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
