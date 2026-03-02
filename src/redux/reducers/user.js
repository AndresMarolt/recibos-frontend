// unused action types removed since they aren't referenced here

const userReducer = (
  state = { authData: null, error: null, isLoading: true },
  action,
) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("token", action.apiRes.data.token);
      return { ...state, authData: action?.apiRes.data, error: null };
    case "LOGOUT":
      return { ...state, authData: null, error: null };
    case "ERROR":
      return { ...state, authData: null, error: action.error };
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
