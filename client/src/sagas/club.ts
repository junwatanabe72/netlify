import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addClubs, removeClubs, ACTIONTYPES } from '../actions/index';
import { getClubsAxios, updateClubsAxios } from '../services/axios/club';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

function* updateClubsAsync(action: Action<PartialArrayClubType>) {
  let clubs: ObjectClubType = {};
  let deleteClubs: PartialObjectClubType = {};
  const userId = action.payload[0].userId;
  try {
    const { data } = yield call(updateClubsAxios, action.payload);
    if (!data.updateClubs) {
      yield toast.error('失敗しました。', options);
      return;
    }
    for (let value of data.updateClubs) {
      const id = value.id;
      clubs[id] = value;
    }

    for (let value of action.payload) {
      if (!value.id) {
      } else {
        const id = value.id;
        deleteClubs[id] = value;
      }
    }

    yield put(removeClubs(deleteClubs));
    yield put(addClubs(clubs));
    yield put(push(`/users/${userId}`));
    yield toast.success('編集に成功しました。', options);
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

function* getClubsAsync(action: Action<PartialUserType>) {
  let clubs: ObjectClubType = {};
  const { data } = yield call(getClubsAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    for (let value of data.allClubs) {
      const id = value.id;
      clubs[id] = value;
    }
    yield put(addClubs(clubs));
    return;
  } catch (e) {
    return { e };
  }
}

export function* clubSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_CLUBS, getClubsAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_CLUBS, updateClubsAsync),
  ]);
}
