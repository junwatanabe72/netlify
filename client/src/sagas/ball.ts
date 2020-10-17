import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addBall, ACTIONTYPES } from '../actions/index';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { getBallAxios, updateBallAxios } from '../services/axios/ball';
import { push } from 'connected-react-router';

function* updateBallAsync(action: Action<BallType>) {
  let ball: ObjectBallType = {};
  const userId = action.payload.userId;
  try {
    const { data } = yield call(updateBallAxios, action.payload);

    if (!data) {
      yield toast.error('失敗しました。', options);
      return;
    }
    const getBall = data.returnBall;
    ball[getBall.id] = getBall;
    yield put(addBall(ball));
    yield toast.success('編集に成功しました。', options);
    yield put(push(`/users/${userId}`));
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

function* getBallAsync(action: Action<PartialUserType>) {
  let ball: ObjectBallType = {};
  const { data } = yield call(getBallAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    const getBall = data.targetBall;
    ball[getBall.id] = getBall;

    yield put(addBall(ball));
    return;
  } catch (e) {
    return { e };
  }
}

export function* ballSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_BALL, getBallAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_BALL, updateBallAsync),
  ]);
}
