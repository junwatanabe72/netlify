import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import currentUser from './CurrentUser';
import shafts from './Shafts';
import makers from './Makers';
import clubs from './Clubs';
import types from './Types';
import users from './Users';
import balls from './Balls';
import videos from './Videos';
import results from './Results';
import modal from './Modal';
export const router = createBrowserHistory();

const reducers = (history: typeof router) =>
  combineReducers({
    router: connectRouter(history),
    currentUser,
    users,
    clubs,
    types,
    shafts,
    makers,
    balls,
    videos,
    results,
    modal,
  });

export default reducers;
