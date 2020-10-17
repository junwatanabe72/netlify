import { ACTIONTYPES } from '../actions';

const initialState: ArrayMakerType = [];

export default function ShaftsReducer(
  state = initialState,
  action: Action<ArrayMakerType>
): ArrayMakerType {
  let newState = state;
  const makers = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_MAKERS: {
      newState = [...makers];
      return newState;
    }
    default: {
      return state;
    }
  }
}
