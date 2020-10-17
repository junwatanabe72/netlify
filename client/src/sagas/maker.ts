import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addMakers, ACTIONTYPES } from '../actions/index';
import { getMakersAxios } from '../services/axios/maker';

function* getMakersAsync() {
  const { allMakers } = yield call(getMakersAxios);
  try {
    const dbMakers = allMakers;
    yield put(addMakers(dbMakers));
    return;
  } catch (e) {
    return { e };
  }
}

export function* makerSagas() {
  yield all([yield takeLatest(ACTIONTYPES.REQUESTED_MAKERS, getMakersAsync)]);
}
