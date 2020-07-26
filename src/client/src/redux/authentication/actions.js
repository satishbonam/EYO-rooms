import {
  // signup
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  CHANGE_SIGNUP_VALUE,
  // login with password
  USER_LOGIN_PASS_FAILURE,
  USER_LOGIN_PASS_SUCCESS,
  USER_LOGIN_PASS_REQUEST,
  // login with otp
  USER_OTP_LOGIN_FAILURE,
  USER_OTP_LOGIN_SUCCESS,
  USER_OTP_LOGIN_REQUEST,
  // login otp verify
  USER_OTP_VERIFY_FAILURE,
  USER_OTP_VERIFY_SUCCESS,
  USER_OTP_VERIFY_REQUEST,
  // google oauth login
  USER_OAUTH_FAILURE,
  USER_OAUTH_REQUEST,
  USER_OAUTH_SUCCESS,
  // logout
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  CHANGE_LOGOUT_VALUE,
  // mobile save for otp
  USER_MOBILE_SAVE,
  // hotel listing
  GET_HOTEL_LISTING_FAILURE,
  GET_HOTEL_LISTING_SUCCESS,
  GET_HOTEL_LISTING_REQUEST,
} from "./actionTypes";

// import axiosInstance from "../../utils/axiosInterceptor";
import axios from "../../utils/axiosInterceptor";

// signup
export const signupUserRequest = () => ({
  type: USER_SIGNUP_REQUEST,
});
export const signupUserSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  payload,
});
export const signupUserFailure = (payload) => ({
  type: USER_SIGNUP_FAILURE,
  payload,
});
export const changeSignupValue = (payload) => ({
  type: CHANGE_SIGNUP_VALUE,
  payload,
});

// login with password
export const loginPassFailure = (payload) => ({
  type: USER_LOGIN_PASS_FAILURE,
  payload,
});
export const loginPassSuccess = (payload) => ({
  type: USER_LOGIN_PASS_SUCCESS,
  payload,
});
export const loginPassRequest = () => ({
  type: USER_LOGIN_PASS_REQUEST,
});

// login with otp
export const loginOtpFailure = (payload) => ({
  type: USER_OTP_LOGIN_FAILURE,
  payload,
});
export const loginOtpSuccess = (payload) => ({
  type: USER_OTP_LOGIN_SUCCESS,
  payload,
});
export const loginOtpRequest = () => ({
  type: USER_OTP_LOGIN_REQUEST,
});
// save mobile
export const saveUserMobile = (payload) => ({
  type: USER_MOBILE_SAVE,
  payload,
});

// login with otp verify
export const loginOtpVerifyFailure = (payload) => ({
  type: USER_OTP_VERIFY_FAILURE,
  payload,
});
export const loginOtpVerifySuccess = (payload) => ({
  type: USER_OTP_VERIFY_SUCCESS,
  payload,
});
export const loginOtpVerifyRequest = () => ({
  type: USER_OTP_VERIFY_REQUEST,
});

// login with Oauth
export const loginOauthFailure = (payload) => ({
  type: USER_OAUTH_FAILURE,
  payload,
});
export const loginOauthSuccess = (payload) => ({
  type: USER_OAUTH_SUCCESS,
  payload,
});
export const loginOauthRequest = () => ({
  type: USER_OAUTH_REQUEST,
});

// logout
export const logoutUserRequest = (payload) => ({
  type: USER_LOGOUT_REQUEST,
  payload,
});
export const logoutUserSuccess = (payload) => ({
  type: USER_LOGOUT_SUCCESS,
  payload,
});
export const logoutUserFailure = () => ({
  type: USER_LOGOUT_FAILURE,
});

export const changeLogoutValue = (payload) => ({
  type: CHANGE_LOGOUT_VALUE,
  payload,
});

// hotel listing
export const hotelListingRequest = (payload) => ({
  type: GET_HOTEL_LISTING_REQUEST,
  payload,
});
export const hotelListingSuccess = (payload) => ({
  type: GET_HOTEL_LISTING_SUCCESS,
  payload,
});
export const hotelListingFailure = () => ({
  type: GET_HOTEL_LISTING_FAILURE,
});

// axios request thunk

// server request for signup
export const signupRequest = (payload) => (dispatch) => {
  dispatch(signupUserRequest());
  console.log(payload);
  return axios
    .post("/register", {
      ...payload,
    })
    .then((res) => dispatch(signupUserSuccess(res)))
    .catch((error) => dispatch(signupUserFailure(error)));
};

// server request for login with password
export const loginRequestWithPassword = (payload) => (dispatch) => {
  dispatch(loginPassRequest());
  return axios
    .post("/login", {
      ...payload,
    })
    .then((data) => dispatch(loginPassSuccess(data)))
    .catch((error) => dispatch(loginPassFailure(error)));
};

// server request for login with  otp
export const loginRequestWithOtp = (payload) => (dispatch) => {
  dispatch(saveUserMobile(payload));
  dispatch(loginOtpRequest());
  console.log(payload);
  return axios
    .post("/login/otp_generate", {
      ...payload,
    })
    .then((data) => dispatch(loginOtpSuccess(data)))
    .catch((error) => dispatch(loginOtpFailure(error)));
};

// server request for otp verify
export const loginRequestWithOtpVerify = (payload) => (dispatch) => {
  dispatch(loginOtpVerifyRequest());
  console.log(payload);
  return axios
    .post("/login/otp_verify", {
      ...payload,
    })
    .then((data) => dispatch(loginOtpVerifySuccess(data)))
    .catch((error) => dispatch(loginOtpVerifyFailure(error)));
};

// server request for google oauth login
export const loginRequestWithOauth = (payload) => (dispatch) => {
  dispatch(loginOauthRequest());
  return axios
    .post("/login/oauth", {
      ...payload,
    })
    .then((data) => dispatch(loginOauthSuccess(data)))
    .catch((error) => dispatch(loginOauthFailure(error)));
};

// server request for logout
export const logoutRequest = (payload) => (dispatch) => {
  dispatch(logoutUserRequest());
  return axios
    .get(
      "/logout",
      {},
      {
        headers: {
          auth_token: payload,
        },
      }
    )
    .then((data) => dispatch(logoutUserSuccess(data)))
    .catch((error) => dispatch(logoutUserFailure(error)));
};

// hotel listing data
export const hotelListingDataRequest = (payload) => (dispatch) => {
  console.log("hotel listing calling...", payload);
  dispatch(hotelListingRequest());

  return axios
    .get("/hotel_listing?" + payload, {})
    .then((data) => {
      console.log(data);
      dispatch(hotelListingSuccess(data));
    })
    .catch((error) => dispatch(hotelListingFailure(error)));
};
