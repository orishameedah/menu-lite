import axios from "axios";

import { toast } from "react-toastify";

const BASEURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

let APIKIT = axios.create({
  baseURL: BASEURL,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

APIKIT.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null;

  if (statusCode === 404) {
    return Promise.reject(error);
  }
  if (
    statusCode === 401 ||
    statusCode === 400 ||
    statusCode === 409 ||
    statusCode === 403
  ) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  } else {
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  }
});

export const authService = {
  signup: (payload: object) => {
    return APIKIT.post("/user/register", payload);
  },
  login: (payload: object) => {
    return APIKIT.post("/user/login", payload);
  },
  forgotPassword: (payload: object) => {
    return APIKIT.post("/user/forgot-password", payload);
  },
  resetPassword: (payload: object, token: any) => {
    return APIKIT.post(`/user/reset-password/${token}`, payload);
  },
};
