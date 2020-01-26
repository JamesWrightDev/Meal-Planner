
import {
  FETCH_RECIPES
} from '../constants/index'
import { takeLatest } from 'redux-saga/effects'

const fetchReceipes = function* () {
  console.log('fetch');
}

export function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
