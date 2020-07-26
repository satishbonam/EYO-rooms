import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  CHANGE_SIGNUP_VALUE,
  USER_LOGIN_PASS_FAILURE,
  USER_LOGIN_PASS_SUCCESS,
  USER_LOGIN_PASS_REQUEST,
  USER_OTP_LOGIN_FAILURE,
  USER_OTP_LOGIN_SUCCESS,
  USER_OTP_LOGIN_REQUEST,
  USER_OTP_VERIFY_FAILURE,
  USER_OTP_VERIFY_SUCCESS,
  USER_OTP_VERIFY_REQUEST,
  USER_MOBILE_SAVE,
  USER_OAUTH_FAILURE,
  USER_OAUTH_SUCCESS,
  USER_OAUTH_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  GET_HOTEL_LISTING_FAILURE,
  GET_HOTEL_LISTING_SUCCESS,
  GET_HOTEL_LISTING_REQUEST,
  CHANGE_LOGOUT_VALUE,
} from "./actionTypes";

const initState = {
  isRequest: false,
  isOtp: false,
  isLogin: false,
  isSignUp: false,
  token: null,
  user: null,
  isError: false,
  otpValue: null,
  mobile: null,
  isLogout: false,
  otpGenerate: false,
  hotelListData: undefined,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // signup
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case USER_SIGNUP_SUCCESS:
      console.log(payload, "payload");
      return {
        ...state,
        isRequest: false,
        message: payload.msg,
        isSignUp: payload.status,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case CHANGE_SIGNUP_VALUE:
      return {
        ...state,
        isSignUp: false,
      };

    // login with password
    case USER_LOGIN_PASS_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case USER_LOGIN_PASS_SUCCESS:
      return {
        ...state,
        isRequest: false,
        message: payload.msg,
        token: payload.token,
        user: payload.user_data,
        isLogin: payload.status,
      };
    case USER_LOGIN_PASS_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // mobile
    case USER_MOBILE_SAVE:
      return {
        ...state,
        mobile: payload,
      };
    // login with otp
    case USER_OTP_LOGIN_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case USER_OTP_LOGIN_SUCCESS:
      return {
        ...state,
        isRequest: false,
        message: payload.msg,
        otpGenerate: payload.status,
      };
    case USER_OTP_LOGIN_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // login with otp verify
    case USER_OTP_VERIFY_REQUEST:
      return {
        ...state,
        isRequest: false,
      };
    case USER_OTP_VERIFY_SUCCESS:
      return {
        ...state,
        isRequest: false,
        message: payload.msg,
        token: payload.token,
        user: payload.user_data,
      };
    case USER_OTP_VERIFY_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // login with Oauth
    case USER_OAUTH_REQUEST:
      return {
        ...state,
        isRequest: false,
      };
    case USER_OAUTH_SUCCESS:
      return {
        ...state,
        isRequest: false,
        message: payload.msg,
        token: payload.token,
        user: payload.user_data,
      };
    case USER_OAUTH_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // logout
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isLogout: payload.status,
        token: null,
        user: null,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case CHANGE_LOGOUT_VALUE:
      return {
        ...state,
        isLogout: false,
      };

    // hotel listing
    case GET_HOTEL_LISTING_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case GET_HOTEL_LISTING_SUCCESS:
      return {
        ...state,
        isRequest: false,
        hotelListData: payload,
      };
    case GET_HOTEL_LISTING_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default reducer;
