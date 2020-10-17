import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addResults, removeResults, ACTIONTYPES } from '../actions/index';
import { getResultsAxios, updateResultsAxios } from '../services/axios/result';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

function* updateResultsAsync(action: Action<PartialArrayResultType>) {
  let results: ObjectResultType = {};
  let deleteResults: PartialObjectResultType = {};
  const userId = action.payload[0].userId;
  try {
    const { data } = yield call(updateResultsAxios, action.payload);

    if (!data.updateResults) {
      yield toast.error('失敗しました。', options);
      return;
    }
    for (let value of data.updateResults) {
      const { id } = value;
      results[id] = value;
    }

    for (let value of action.payload) {
      if (!value.id) {
      } else {
        const { id } = value;
        deleteResults[id] = value;
      }
    }

    yield put(removeResults(deleteResults));
    yield put(addResults(results));
    yield put(push(`/users/${userId}`));
    yield toast.success('編集に成功しました。', options);

    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

function* getResultsAsync(action: Action<PartialUserType>) {
  let results: ObjectResultType = {};
  const { data } = yield call(getResultsAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    for (let value of data.allResults) {
      const { id } = value;
      results[id] = value;
    }
    yield put(addResults(results));
    return;
  } catch (e) {
    return { e };
  }
}

export function* resultSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_RESULTS, getResultsAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_RESULTS, updateResultsAsync),
  ]);
}
