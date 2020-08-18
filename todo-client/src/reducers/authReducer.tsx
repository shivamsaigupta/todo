import { SIGN_IN, SIGN_OUT } from "../actions/types";

type Action =
  | { type: typeof SIGN_IN; payload: string }
  | { type: typeof SIGN_OUT };

type State = { isSignedIn: boolean | null; userId: string | null };

const INITIAL_STATE: State = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
