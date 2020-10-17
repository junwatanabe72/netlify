import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addTypes, ACTIONTYPES } from '../actions/index';
import { getTypesAxios } from '../services/axios/type';

function* getTypesAsync() {
  const { allClubTypes } = yield call(getTypesAxios);
  try {
    const dbClubTypes = allClubTypes;
    yield put(addTypes(dbClubTypes));
    return;
  } catch (e) {
    return { e };
  }
}

export function* typeSagas() {
  yield all([yield takeLatest(ACTIONTYPES.REQUESTED_TYPES, getTypesAsync)]);
}
