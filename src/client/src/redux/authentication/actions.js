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
  HANDLE_FILTER_AMENITIES,
  HANDLE_FILTER_ACCOMODATION,
  HANDLE_FILTER_CATEGORY,
  HANDLE_FILTER_CHECKIN,
  HANDLE_FILTER_COLLECTIONS,
  HANDLE_PARAMS,
  // hotel entity
  HOTEL_ENTITY_REQUEST,
  HOTEL_ENTITY_SUCCESS,
  HOTEL_ENTITY_FAILURE,
  // hotel id
  HOTEL_ID,
  // page change
  PAGE_CHANGE,
  // hotel recommendation
  HOTEL_RECOMMENDATION_REQUEST,
  HOTEL_RECOMMENDATION_SUCCESS,
  HOTEL_RECOMMENDATION_FAILURE,
  // hotel review
  HOTEL_REVIEW_REQUEST,
  HOTEL_REVIEW_SUCCESS,
  HOTEL_REVIEW_FAILURE,
  // hotel bill data
  HOTEL_BILLING_REQUEST,
  HOTEL_BILLING_SUCCESS,
  HOTEL_BILLING_FAILURE,
  //razorpay request
  RAZORPAY_REQUEST_FAILURE,
  RAZORPAY_REQUEST_REQUEST,
  RAZORPAY_REQUEST_SUCCESS,
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
// hotel id
export const hotelId = (payload) => ({
  type: HOTEL_ID,
  payload,
});
// hotel page change
export const pageChange = (payload) => ({
  type: PAGE_CHANGE,
  payload,
});

// hotel enity
export const hotelEntityRequest = (payload) => ({
  type: HOTEL_ENTITY_REQUEST,
  payload,
});
export const hotelEntitySuccess = (payload) => ({
  type: HOTEL_ENTITY_SUCCESS,
  payload,
});
export const hotelEntityFailure = (payload) => ({
  type: HOTEL_ENTITY_FAILURE,
  payload,
});
// hotel  bill data
export const hotelBillingRequest = (payload) => ({
  type: HOTEL_BILLING_REQUEST,
  payload,
});
export const hotelBillingSuccess = (payload) => ({
  type: HOTEL_BILLING_SUCCESS,
  payload,
});
export const hotelBillingFailure = (payload) => ({
  type: HOTEL_BILLING_FAILURE,
  payload,
});

// hotel recommendations
export const hotelRecommendationRequest = (payload) => ({
  type: HOTEL_RECOMMENDATION_REQUEST,
  payload,
});
export const hotelRecommendationSuccess = (payload) => ({
  type: HOTEL_RECOMMENDATION_SUCCESS,
  payload,
});
export const hotelRecommendationFailure = (payload) => ({
  type: HOTEL_RECOMMENDATION_FAILURE,
  payload,
});

// hotel reviews
export const hotelReviewRequest = (payload) => ({
  type: HOTEL_REVIEW_REQUEST,
  payload,
});
export const hotelReviewSuccess = (payload) => ({
  type: HOTEL_REVIEW_SUCCESS,
  payload,
});
export const hotelReviewFailure = (payload) => ({
  type: HOTEL_REVIEW_FAILURE,
  payload,
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
  console.log(payload, "otp request");
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
    dispatch(pageChange(payload.page));
  dispatch(hotelListingRequest());

  return axios
    .post("/hotel_listing?" + payload.path, {
      ...payload.location
    })
    .then((data) => {
      console.log(data);
      dispatch(hotelListingSuccess(data));
    })
    .catch((error) => dispatch(hotelListingFailure(error)));
};

export const handleFilterAmenities = (payload) => ({
  type: HANDLE_FILTER_AMENITIES,
  payload,
});

export const handleFilterCollection = (payload) => ({
  type: HANDLE_FILTER_COLLECTIONS,
  payload,
});

export const handleFilterCheckin = (payload) => ({
  type: HANDLE_FILTER_CHECKIN,
  payload,
});

export const handleFilterCategory = (payload) => ({
  type: HANDLE_FILTER_CATEGORY,
  payload,
});

export const handleFilterAccomodation = (payload) => ({
  type: HANDLE_FILTER_ACCOMODATION,
  payload,
});

export const handleParams = (payload) => ({
  type: HANDLE_PARAMS,
  payload,
});

// hotel entity data
export const hotelEntityDataRequest = (payload) => (dispatch) => {
  console.log("hotel entity calling...", payload);
  dispatch(hotelEntityRequest());
  dispatch(hotelId(payload));
  return axios
    .post("/entity", {
      hotel_id: payload,
    })
    .then((data) => dispatch(hotelEntitySuccess(data)))
    .catch((error) => dispatch(hotelEntityFailure(error)));
};
// hotel billing  data
export const hotelBillingDataRequest = (payload) => (dispatch) => {
  console.log("hotel billing calling...", payload);
  dispatch(hotelBillingRequest());
  return axios
    .post("/bill_data", {
      ...payload,
    })
    .then((data) => dispatch(hotelBillingSuccess(data)))
    .catch((error) => dispatch(hotelBillingFailure(error)));
};

// hotel recommendation
export const hotelRecommendationDataRequest = (id,payload) => (dispatch) => {
  console.log("hotel recommendation calling...",id,payload);
  dispatch(hotelRecommendationRequest());

  return axios
    .post("/recommendations?"+payload , {
      hotel_id:id
    })
    .then((data) => {
      console.log(data);
      dispatch(hotelRecommendationSuccess(data));
    })
    .catch((error) => dispatch(hotelRecommendationFailure(error)));
}

// hotel review
export const hotelReviewDataRequest = (payload) => (dispatch) => {
  console.log("hotel review calling...", payload);
  dispatch(hotelReviewRequest());

  return axios
    .post("/reviews", {
      hotel_id: payload,
    })
    .then((data) => {
      console.log(data);
      dispatch(hotelReviewSuccess(data));
    })
    .catch((error) => dispatch(hotelReviewFailure(error)));
};

//razor pay request
export const razorpayRequestRequest = (payload) => ({
  type: RAZORPAY_REQUEST_REQUEST,
  payload,
});

export const razorpayRequestSuccess = (payload) => ({
  type: RAZORPAY_REQUEST_SUCCESS,
  payload,
});

export const razorpayRequestFailure = (payload) => ({
  type: RAZORPAY_REQUEST_FAILURE,
  payload,
});

export const razorpayRequest = (payload) => (dispatch) => {
  dispatch(razorpayRequestRequest());
  return axios
    .post(
      "/payment_request",
      {
        ...payload.data,
      },
      {
        headers: {
          auth_token: payload.token,
        },
      }
    )
    .then((res) => dispatch(razorpayRequestSuccess(res)))
    .catch((err) => dispatch(razorpayRequestFailure(err)));
};
