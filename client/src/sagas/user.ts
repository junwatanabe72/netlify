import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addUser, addUsers, ACTIONTYPES } from '../actions/index';
import { getUsersAxios, updateUserAxios, updateUserImageAxios } from '../services/axios/user';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { createUserAxios } from '../services/axios/auth';
import { push } from 'connected-react-router';

//users
function* getUsersAsync() {
  let users: ObjectUserType = {};
  const { allUsers } = yield call(getUsersAxios);
  try {
    for (let value of allUsers) {
      const id = value.id;
      users[id] = value;
    }
    yield put(addUsers(users));
    return;
  } catch (e) {
    return { e };
  }
}

function* createUserAsync(action: Action<SignupUserType>) {
  try {
    const data = yield call(createUserAxios, action.payload);
    if (data.error) {
      yield toast.error(`${data.error}`, options);
      return;
    }
    yield toast.success('新規登録に成功しました。', options);
    yield put(push('/login'));
    return;
  } catch (e) {
    return { e };
  }
}

function* updateUserAsync(action: Action<PartialUserType>) {
  let users: ObjectUserType = {};
  try {
    const data = yield call(updateUserAxios, action.payload);

    if (data.error) {
      yield toast.error(`${data.error}`, options);
      return;
    }
    yield toast.success('編集に成功しました。', options);
    const user = data.updateUser;
    users[user.id] = user;
    yield put(addUser(user));
    yield put(addUsers(users));
    yield put(push(`/users/${user.id}`));
    return;
  } catch (e) {
    return { e };
  }
}

function* updateUserImageAsync(action: Action<FormData>) {
  let users: ObjectUserType = {};
  try {
    const data = yield call(updateUserImageAxios, action.payload);

    if (data.error) {
      yield toast.error(`${data.error}`, options);
      return;
    }
    yield toast.success('編集に成功しました。', options);
    const user = data.updateUser.updateUser;
    users[user.id] = user;
    yield put(addUser(user));
    yield put(addUsers(users));
    yield put(push(`/users/${user.id}`));
    return;
  } catch (e) {
    return { e };
  }
}

export function* userSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_USER, getUsersAsync),
    yield takeLatest(ACTIONTYPES.CREATE_USER, createUserAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_USER, updateUserAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_IMAGE_USER, updateUserImageAsync),
  ]);
}
