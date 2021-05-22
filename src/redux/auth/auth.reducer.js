import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {
  token: null,
  error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      };
      case AuthActionTypes.SIGN_IN_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default authReducer;
