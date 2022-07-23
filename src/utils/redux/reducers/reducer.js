const initialState = {
  isLoggedIn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
