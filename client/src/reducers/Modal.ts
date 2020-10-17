import { ACTIONTYPES } from '../actions/index';

const initialState: any = {
  show: false,
  component: [],
};

export default function ModalReducer(state = initialState, action: Action<JSX.Element>) {
  switch (action.type) {
    case ACTIONTYPES.MODAL_PUSH:
      return {
        ...state,
        component: [...state.component, action.payload],
        show: true,
      };
    case ACTIONTYPES.MODAL_POP:
      return {
        ...state,
        component: state.component.slice(0, -1),
        show: false,
      };
    default:
      return state;
  }
}
