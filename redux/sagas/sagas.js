
import {
  FETCH_RECIPES
} from '../constants/index'
import { fetchRecipesSuccess } from '../actions/index'
import { takeLatest, put, call } from 'redux-saga/effects'
import * as firebase from 'firebase';

const fetchReceipes = function* () {
  const response = yield firebase.database().ref("/recipes/")
    .once('value')
    .then(function(snapshot){
    return snapshot.val();
  });
  if(response){
    yield put( fetchRecipesSuccess(response) );
  }
}

export function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
