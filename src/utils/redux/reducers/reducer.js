const initialState = {
  isLoggedIn: false,
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
