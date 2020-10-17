//ACTIONTYPES
export const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USERS: 'ADD_USERS',
  DELETE_USERS: 'DELETE_USERS',
  ADD_CLUBS: 'ADD_CLUBS',
  REMOVE_CLUBS: 'REMOVE_CLUBS',
  ADD_VIDEOS: 'ADD_VIDEOS',
  REMOVE_VIDEOS: 'REMOVE_VIDEOS',
  ADD_RESULTS: 'ADD_RESULTS',
  REMOVE_RESULTS: 'REMOVE_RESULTS',
  ADD_BALL: 'ADD_BALL',
  ADD_TYPES: 'ADD_TYPES',
  ADD_SHAFTS: 'ADD_SHAFTS',
  ADD_MAKERS: 'ADD_MAKERS',
  // modal
  MODAL_PUSH: 'MODAL_PUSH',
  MODAL_POP: 'MODAL_POP',
  // saga
  CREATE_USER: 'CREATE_USER',
  LOGIN_USER: 'LOGIN_USER',
  CHECK_LOGIN_USER: 'CHECK_LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  REQUESTED_USER: 'REQUESTED_USER',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_IMAGE_USER: 'UPDATE_IMAGE_USER',
  REQUESTED_CLUBS: 'REQUESTED_CLUBS',
  UPDATE_CLUBS: 'UPDATE_CLUBS',
  REQUESTED_VIDEOS: 'REQUESTED_VIDEOS',
  UPDATE_VIDEOS: 'UPDATE_VIDEOS',
  REQUESTED_BALL: 'REQUESTED_BALL',
  UPDATE_BALL: 'UPDATE_BALL',
  REQUESTED_RESULTS: 'REQUESTED_RESULTS',
  UPDATE_RESULTS: 'UPDATE_RESULTS',
  REQUESTED_TYPES: 'REQUESTED_TYPES',
  REQUESTED_SHAFTS: 'REQUESTED_SHAFTS',
  REQUESTED_MAKERS: 'REQUESTED_MAKERS',
  //
} as const;

//REDUX_SAGA
export function getUsers(): BasicAction {
  return { type: ACTIONTYPES.REQUESTED_USER };
}
export function createUser(data: {
  password: string;
  email: string;
  name: string;
  sex: number;
}): Action<{ password: string; email: string; name: string; sex: number }> {
  return { type: ACTIONTYPES.CREATE_USER, payload: data };
}
export function updateUser(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.UPDATE_USER, payload: data };
}
export function updateImageUser(data: FormData): Action<FormData> {
  return { type: ACTIONTYPES.UPDATE_IMAGE_USER, payload: data };
}
export function loginUser(data: {
  password: string;
  email: string;
}): Action<{ password: string; email: string }> {
  return { type: ACTIONTYPES.LOGIN_USER, payload: data };
}
export function checkLoginUser(): BasicAction {
  return { type: ACTIONTYPES.CHECK_LOGIN_USER };
}
export function logoutUser(): BasicAction {
  return { type: ACTIONTYPES.LOGOUT_USER };
}
export function getClubs(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.REQUESTED_CLUBS, payload: data };
}
export function updateClubs(data: PartialArrayClubType): Action<PartialArrayClubType> {
  return { type: ACTIONTYPES.UPDATE_CLUBS, payload: data };
}
export function getVideos(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.REQUESTED_VIDEOS, payload: data };
}
export function updateVideos(data: PartialArrayVideoType): Action<PartialArrayVideoType> {
  return { type: ACTIONTYPES.UPDATE_VIDEOS, payload: data };
}
export function getBall(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.REQUESTED_BALL, payload: data };
}
export function updateBall(data: BallType): Action<BallType> {
  return { type: ACTIONTYPES.UPDATE_BALL, payload: data };
}
export function getResults(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.REQUESTED_RESULTS, payload: data };
}
export function updateResults(data: PartialArrayResultType): Action<PartialArrayResultType> {
  return { type: ACTIONTYPES.UPDATE_RESULTS, payload: data };
}
export function getTypes(): BasicAction {
  return { type: ACTIONTYPES.REQUESTED_TYPES };
}
export function getMakers(): BasicAction {
  return { type: ACTIONTYPES.REQUESTED_MAKERS };
}
export function getShafts(): BasicAction {
  return { type: ACTIONTYPES.REQUESTED_SHAFTS };
}
//REDUX_SAGA

export function addUser(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.ADD_USER, payload: data };
}
export function deleteUser(): BasicAction {
  return { type: ACTIONTYPES.DELETE_USER };
}
//usersActionCreater
export function addUsers(data: ObjectUserType): Action<ObjectUserType> {
  return { type: ACTIONTYPES.ADD_USERS, payload: data };
}
export function deleteUsers(): BasicAction {
  return { type: ACTIONTYPES.DELETE_USERS };
}
//clubsActionCreater
export function addClubs(data: ObjectClubType): Action<ObjectClubType> {
  return { type: ACTIONTYPES.ADD_CLUBS, payload: data };
}
export function removeClubs(data: PartialObjectClubType): Action<PartialObjectClubType> {
  return { type: ACTIONTYPES.REMOVE_CLUBS, payload: data };
}
//videosActionCreater
export function addVideos(data: ObjectVideoType): Action<ObjectVideoType> {
  return { type: ACTIONTYPES.ADD_VIDEOS, payload: data };
}
export function removeVideos(data: PartialObjectVideoType): Action<PartialObjectVideoType> {
  return { type: ACTIONTYPES.REMOVE_VIDEOS, payload: data };
}
export function addResults(data: ObjectResultType): Action<ObjectResultType> {
  return { type: ACTIONTYPES.ADD_RESULTS, payload: data };
}
export function removeResults(data: PartialObjectResultType): Action<PartialObjectResultType> {
  return { type: ACTIONTYPES.REMOVE_RESULTS, payload: data };
}
//ballsActionCreater
export function addBall(data: ObjectBallType): Action<ObjectBallType> {
  return { type: ACTIONTYPES.ADD_BALL, payload: data };
}
//typesActionCreater
export function addTypes(data: ArrayClubTypeType): Action<ArrayClubTypeType> {
  return { type: ACTIONTYPES.ADD_TYPES, payload: data };
}

//typesActionCreater
export function addShafts(data: ArrayShaftType): Action<ArrayShaftType> {
  return { type: ACTIONTYPES.ADD_SHAFTS, payload: data };
}
//typesActionCreater
export function addMakers(data: ArrayMakerType): Action<ArrayMakerType> {
  return { type: ACTIONTYPES.ADD_MAKERS, payload: data };
}

export function modalPush(data: JSX.Element): Action<JSX.Element> {
  return { type: ACTIONTYPES.MODAL_PUSH, payload: data };
}
export function modalPop(data: JSX.Element): Action<JSX.Element> {
  return { type: ACTIONTYPES.MODAL_POP, payload: data };
}
