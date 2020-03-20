import { takeLatest, put } from "redux-saga/effects";
import { FETCH_RECIPES } from "../constants/index";
import { fetchRecipesSuccess, fetchRecipesFail } from "./actions";

const fetchReceipes = function*() {
  const baseUrl = "http://192.168.0.106:1337";
  try {
    const recipes = yield fetch(`${baseUrl}/recipes`).then(response =>
      response.json()
    );
    yield put(fetchRecipesSuccess(recipes));
  }catch(error){
    yield put(fetchRecipesFail(error));
  }
};

export default function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
