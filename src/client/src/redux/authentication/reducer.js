import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
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
  USER_OAUTH_FAILURE,USER_OAUTH_SUCCESS,USER_OAUTH_REQUEST
  
} from "./actionTypes";

const initState = {
  isRequest: false,
  isOtp: false,
  isLogin: false,
  isSignUp: false,
  token: null,
  isError: false,
  otpValue: null,
  mobile:null
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
        isSignUp:payload.status
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };

        // login with password
      case USER_LOGIN_PASS_REQUEST:
        return {
          ...state,
          isRequest:true
  
        }
      case USER_LOGIN_PASS_SUCCESS:
        return {
          ...state,
          isRequest:false,
          message:payload.msg,
          token:payload.token,
          isLogin:payload.status
        }
      case USER_LOGIN_PASS_FAILURE:
        return {
          ...state,
          isRequest:false,
          isError:true
        }
      // mobile 
      case USER_MOBILE_SAVE:
        return {
          ...state,
         mobile:payload
        }
      // login with otp
      case USER_OTP_LOGIN_REQUEST:
        return {
          ...state,
          isRequest:true
  
        }
      case USER_OTP_LOGIN_SUCCESS:
        return {
          ...state,
          isRequest:false,
          message:payload.msg,
        }
      case USER_OTP_LOGIN_FAILURE:
        return {
          ...state,
          isRequest:false,
          isError:true
        }
      // login with otp verify
      case  USER_OTP_VERIFY_FAILURE:
        return {
          ...state,
          isRequest:false,
          isError:true
  
        }
      case USER_OTP_VERIFY_SUCCESS:
        return {
          ...state,
          isRequest:false,
          message:payload.msg,
          token:payload.token
        }
        case USER_OTP_VERIFY_REQUEST:
          return {
          ...state,
          isRequest:false,
          message:payload.msg,
          token:payload.token
        }
      // login with Oauth
      case  USER_OAUTH_FAILURE:
        return {
          ...state,
          isRequest:false,
          isError:true
  
        }
      case USER_OAUTH_REQUEST:
        return {
          ...state,
          isRequest:false,
        }
      case USER_OAUTH_SUCCESS:
        return {
          ...state,
          isRequest:false,
          message:payload.msg,
          token:payload.token
      }
    default:
      return state;
  }
};

export default reducer;
