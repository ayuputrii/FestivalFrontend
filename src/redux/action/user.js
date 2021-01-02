import Axios from "axios";
import { GET_USER, USER_LOGOUT } from "../type/user";
import { URI } from "../utils";

export const getUser = (token) => async (dispatch) => {
  const res = await Axios.get(`${URI}/user/login`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_USER, payload: res.data });
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
