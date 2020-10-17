import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addVideos, removeVideos, ACTIONTYPES } from '../actions/index';
import { getVideosAxios, updateVideosAxios } from '../services/axios/video';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

function* updateVideosAsync(action: Action<PartialArrayVideoType>) {
  let videos: ObjectVideoType = {};
  let deleteVideos: PartialObjectVideoType = {};
  const userId = action.payload[0].userId;
  try {
    const { data } = yield call(updateVideosAxios, action.payload);

    if (!data.updateVideos) {
      yield toast.error('失敗しました。', options);
      return;
    }
    for (let value of data.updateVideos) {
      const id = value.id;
      videos[id] = value;
    }

    for (let value of action.payload) {
      if (!value.id) {
      } else {
        const id = value.id;
        deleteVideos[id] = value;
      }
    }

    yield put(removeVideos(deleteVideos));
    yield put(addVideos(videos));
    yield toast.success('編集に成功しました。', options);
    yield put(push(`/users/${userId}`));
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

function* getVideosAsync(action: Action<PartialUserType>) {
  let videos: ObjectVideoType = {};
  const { data } = yield call(getVideosAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    for (let value of data.allVideos) {
      const id = value.id;
      videos[id] = value;
    }
    yield put(addVideos(videos));
    return;
  } catch (e) {
    return { e };
  }
}

export function* videoSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_VIDEOS, getVideosAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_VIDEOS, updateVideosAsync),
  ]);
}
