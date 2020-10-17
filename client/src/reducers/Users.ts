import { ACTIONTYPES } from '../actions';

const initialState: ObjectUserType = {};

export default function UsersReducer(
  state = initialState,
  action: Action<ObjectUserType>
): ObjectUserType {
  let newState = state;
  const users = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_USERS: {
      newState = { ...state, ...users };
      return newState;
    }
    case ACTIONTYPES.DELETE_USERS: {
      newState = {};
      return newState;
    }
    default: {
      return state;
    }
  }
}
