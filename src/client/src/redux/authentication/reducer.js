import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

const initState = {
  isAuth: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { isAuth: true };
    case LOGOUT_USER:
      return { isAuth: false };

    default:
      return state;
  }
};

export default reducer;
