
import {
  FETCH_RECIPES
} from '../constants/index'
import { fetchRecipesSuccess } from '../actions/index'
import { takeLatest, put, call } from 'redux-saga/effects'
import * as firebase from 'firebase';

const fetchReceipes = function* () {

  // firebase.database().ref('/recipes/')
  // .once('value')
  // .then(function(snapshot) {
  //   return snapshot.val();
  // })
  // .catch(function(error){
  //   console.log('qwe');
  // })
  const response = yield firebase.database().ref("/recipes/").once('value').then(function(snapshot){
    return snapshot.val();
  });

  yield put( fetchRecipesSuccess(response) );
}

export function* recipesWatcher() {
  yield takeLatest(FETCH_RECIPES, fetchReceipes);
}
