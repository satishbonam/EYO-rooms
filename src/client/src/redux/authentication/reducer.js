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
  CHANGE_LOGOUT_VALUE,
  GET_HOTEL_LISTING_FAILURE,
  GET_HOTEL_LISTING_SUCCESS,
  GET_HOTEL_LISTING_REQUEST,
  // hotel entity
  HOTEL_ENTITY_REQUEST,
  HOTEL_ENTITY_SUCCESS,
  HOTEL_ENTITY_FAILURE,
  // hotel id
  HOTEL_ID,
  // pagr change
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
  // hotel filtering
  HANDLE_FILTER_AMENITIES,
  HANDLE_FILTER_ACCOMODATION,
  HANDLE_FILTER_CATEGORY,
  HANDLE_FILTER_CHECKIN,
  HANDLE_FILTER_COLLECTIONS,
  HANDLE_PARAMS,
  //razorpay request
  RAZORPAY_REQUEST_FAILURE,
  RAZORPAY_REQUEST_REQUEST,
  RAZORPAY_REQUEST_SUCCESS,
} from "./actionTypes";
import { element } from "prop-types";
import { saveData } from "../authentication/localStorage";

const initState = {
  isAuth: false,
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
  params: "",
  otpGenerate: false,
  hotelListData: undefined,
  hotelId: undefined,
  entityData: undefined,
  billingData: undefined,
  review: undefined,
  recommendation: undefined,
  razor: undefined,
  payment: false,
  isloading: false,
  page:1
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
        isAuth: true,
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
        isAuth: true,
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
        isAuth: true,
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
        isAuth: false,
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
      saveData("hotelListData", payload);
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
    // hotel entity
    case HOTEL_ENTITY_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case HOTEL_ENTITY_SUCCESS:
      console.log(payload, "entity success");
      return {
        ...state,
        isRequest: false,
        entityData: payload.data[0],
      };
    case HOTEL_ENTITY_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // hotel id
    case HOTEL_ID:
      return {
        ...state,
        hotelId: payload,
      };
    // page change
    case PAGE_CHANGE:
      return {
      ...state,
      page: payload,
      };
    // hotel bill data
    case HOTEL_BILLING_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case HOTEL_BILLING_SUCCESS:
      console.log(payload.data);
      return {
        ...state,
        isRequest: false,
        billingData: payload.data,
      };
    case HOTEL_BILLING_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // hotel recommendation
    case HOTEL_RECOMMENDATION_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case HOTEL_RECOMMENDATION_SUCCESS:
      console.log(payload, "recommendation data");
      return {
        ...state,
        isRequest: false,
        recommendation: payload.data,
      };
    case HOTEL_RECOMMENDATION_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // hotel review
    case HOTEL_REVIEW_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case HOTEL_REVIEW_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isRequest: false,
        review: payload.data,
      };
    case HOTEL_REVIEW_FAILURE:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    // hotel filtering
    case HANDLE_FILTER_AMENITIES:
      return {
        ...state,
        hotelListData: {
          ...state.hotelListData,
          filters: {
            ...state.hotelListData.filters,
            amenities: state.hotelListData.filters.amenities.map((item) => {
              if (item.label === payload.label) {
                return { label: payload.label, status: !payload.status };
              }
              return item;
            }),
          },
        },
      };
    case HANDLE_FILTER_ACCOMODATION:
      return {
        ...state,
        hotelListData: {
          ...state.hotelListData,
          filters: {
            ...state.hotelListData.filters,
            accomodation_type: state.hotelListData.filters.accomodation_type.map(
              (item) => {
                if (item.label === payload.label) {
                  return { label: payload.label, status: !payload.status };
                }
                return item;
              }
            ),
          },
        },
      };
    case HANDLE_FILTER_CATEGORY:
      return {
        ...state,
        hotelListData: {
          ...state.hotelListData,
          filters: {
            ...state.hotelListData.filters,
            category: state.hotelListData.filters.category.map((item) => {
              if (item.label === payload.label) {
                return { label: payload.label, status: !payload.status };
              }
              return item;
            }),
          },
        },
      };
    case HANDLE_FILTER_CHECKIN:
      return {
        ...state,
        hotelListData: {
          ...state.hotelListData,
          filters: {
            ...state.hotelListData.filters,
            checkin_features: state.hotelListData.filters.checkin_features.map(
              (item) => {
                if (item.label === payload.label) {
                  return { label: payload.label, status: !payload.status };
                }
                return item;
              }
            ),
          },
        },
      };
    case HANDLE_FILTER_COLLECTIONS:
      return {
        ...state,
        hotelListData: {
          ...state.hotelListData,
          filters: {
            ...state.hotelListData.filters,
            collections: state.hotelListData.filters.collections.map((item) => {
              if (item.label === payload.label) {
                return { label: payload.label, status: !payload.status };
              }
              return item;
            }),
          },
        },
      };
    case HANDLE_PARAMS:
      return {
        ...state,
        params: {
          amenities: state.hotelListData.filters.amenities.reduce(
            (result, item) => {
              if (item.status) {
                result.push(item.label);
              }
              return result;
            },
            []
          ),
          collections: state.hotelListData.filters.collections.reduce(
            (result, item) => {
              if (item.status) {
                result.push(item.label);
              }
              return result;
            },
            []
          ),
          accomodation_type: state.hotelListData.filters.accomodation_type.reduce(
            (result, item) => {
              if (item.status) {
                result.push(item.label);
              }
              return result;
            },
            []
          ),
          category: state.hotelListData.filters.category.reduce(
            (result, item) => {
              if (item.status) {
                result.push(item.label);
              }
              return result;
            },
            []
          ),
          checkin_features: state.hotelListData.filters.checkin_features.reduce(
            (result, item) => {
              if (item.status) {
                result.push(item.label);
              }
              return result;
            },
            []
          ),
        },
      };
    case RAZORPAY_REQUEST_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case RAZORPAY_REQUEST_SUCCESS:
      return {
        ...state,
        razor: payload.data,
        isloading: false,
      };

    case RAZORPAY_REQUEST_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
};

export default reducer;
