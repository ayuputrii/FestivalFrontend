import Axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../type/register";
import { URI } from "../utils";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (message) => {
  return {
    type: REGISTER_SUCCESS,
    payload: message,
  };
};

export const registerFailed = (message) => {
  return {
    type: REGISTER_FAILED,
    payload: message,
  };
};

export const signup = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await Axios.post(`${URI}/auth/register`, data);
    dispatch(registerSuccess(res.data.message));
  } catch (error) {
    dispatch(registerFailed(error.message));
  }
};
