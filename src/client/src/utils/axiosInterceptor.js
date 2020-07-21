/* eslint-disable no-console */
import axios from "axios";

let interceptorEnabled = false;

if (process.env.NODE_ENV !== "production") {
  interceptorEnabled = true;
}

const axiosInstance = axios.create({
  baseURL: "<Base_URL>"
});

axiosInstance.interceptors.request.use(request => {
  if (interceptorEnabled) {
    console.log(`Request: ${request.method} ${request.baseURL}${request.url}`);
  }
  return request;
});

axiosInstance.interceptors.response.use(
  response => {
    if (interceptorEnabled) {
      console.log("Response Status: ", response.status);
      console.log("Response Summary: ", response.data.summary);
      console.log("Response Content: ", response.data.data);
    }
  },
  error => console.log(error)
);

export default axiosInstance;
