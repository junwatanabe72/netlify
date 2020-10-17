import { ACTIONTYPES } from '../actions';

const initialState: ArrayShaftType = [];

export default function ShaftsReducer(
  state = initialState,
  action: Action<ArrayShaftType>
): ArrayShaftType {
  let newState = state;
  const shafts = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_SHAFTS: {
      newState = [...shafts];
      return newState;
    }
    default: {
      return state;
    }
  }
}
