import { ACTIONTYPES } from '../actions';

// objectに変更する。
// const sample = {
//   5: {
//     id: 5,
//     name: 'pro-v1x',
//     userId: 1,
//     maker: 'mizuno',
//   },
//   7: {
//     id: 7,
//     name: 'pro-v1',
//     userId: 2,
//     maker: 'mizuno',
//   },
// };
const initialState: ObjectBallType = {};

export default function ClubsReducer(
  state = initialState,
  action: Action<ObjectBallType>
): ObjectBallType {
  let newState = state;
  const ball = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_BALL: {
      newState = { ...state, ...ball };
      return newState;
    }
    default: {
      return state;
    }
  }
}
