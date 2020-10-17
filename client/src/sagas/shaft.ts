import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addShafts, ACTIONTYPES } from '../actions/index';
import { getShaftsAxios } from '../services/axios/shaft';

function* getShaftsAsync() {
  const { allShafts } = yield call(getShaftsAxios);
  try {
    const dbShafts = allShafts;
    yield put(addShafts(dbShafts));
    return;
  } catch (e) {
    return { e };
  }
}

export function* shaftSagas() {
  yield all([yield takeLatest(ACTIONTYPES.REQUESTED_SHAFTS, getShaftsAsync)]);
}
