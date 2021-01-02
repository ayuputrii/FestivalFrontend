import Axios from "axios";
import { GET_ALL, GET_PAGINATION } from "../type/user";
import { URI } from "../utils";

export const getInfo = (token) => async (dispatch) => {
  const res = await Axios.get(`${URI}/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_ALL, payload: res.data });
};

export const getPagination = (token) => async (dispatch) => {
  const res = await Axios.get(`${URI}/info/get`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_PAGINATION, payload: res.data });
};
