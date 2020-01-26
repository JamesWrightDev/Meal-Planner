import {
  recipesWatcher
} from '../sagas/sagas'
import {all} from 'redux-saga/effects'

export function* rootSaga() {
  yield all([
    recipesWatcher(),
  ])
}