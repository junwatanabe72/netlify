import { all, fork } from 'redux-saga/effects';
import { userSagas } from './user';
import { clubSagas } from './club';
import { ballSagas } from './ball';
import { videoSagas } from './video';
import { authSagas } from './auth';
import { resultSagas } from './result';
import { makerSagas } from './maker';
import { shaftSagas } from './shaft';
import { typeSagas } from './type';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(clubSagas),
    fork(ballSagas),
    fork(videoSagas),
    fork(authSagas),
    fork(resultSagas),
    fork(makerSagas),
    fork(shaftSagas),
    fork(typeSagas),
  ]);
}
