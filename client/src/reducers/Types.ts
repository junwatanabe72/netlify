import { ACTIONTYPES } from '../actions';

const initialState: ArrayClubTypeType = [];

export default function TypesReducer(
  state = initialState,
  action: Action<ArrayClubTypeType>
): ArrayClubTypeType {
  let newState = state;
  const types = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_TYPES: {
      newState = [...types];
      return newState;
    }
    default: {
      return state;
    }
  }
}
