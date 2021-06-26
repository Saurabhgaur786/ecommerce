const initialState = {
  loggedIn: false,
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        username: action.username,
      };

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        username: "",
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        showSideBar: !state.showSideBar,
      };

    default:
      return state;
  }
};

export default userReducer;
