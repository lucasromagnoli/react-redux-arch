import { call, put } from 'redux-saga/effects';
import { addFavoriteSuccess } from '../actions/favorites';

export function* addFavorite(action) {
  yield put(addFavoriteSuccess(action));
}
