import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

export const loginUser = () => ({
  type: LOGIN_USER
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});
