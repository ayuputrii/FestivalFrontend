import Axios from "axios";
import {
  GET_INFO_ADMIN,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILED,
  SEARCH_INFO_ADMIN,
  EDIT_PHOTO,
  EDIT_INFO_REQUEST,
  EDIT_INFO_SUCCESS,
  EDIT_INFO_FAILED,
  DELETE_INFO_REQUEST,
  DELETE_INFO_SUCCESS,
  DELETE_INFO_FAILED,
} from "../type/admin";
import { URL_ADM } from "../../utils";

// Create Info
export const infoAdminRequest = () => {
  return {
    type: CREATE_REQUEST,
  };
};

export const infoAdminSuccess = (data) => {
  return {
    type: CREATE_SUCCESS,
    payload: data,
  };
};

export const infoAdminFailed = (data) => {
  return {
    type: CREATE_FAILED,
    payload: error,
  };
};

export const createAdmin = (fields, token) => (dispatch) => {
  dispatch(infoAdminRequest());
  Axios.post(`${URL_ADM}/info/create`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(infoAdminSuccess(res.data));
    })
    .catch((error) => {
      dispatch(infoAdminFailed(error.message));
    });
};

// Get User
export const getAdmin = (token) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/info/get`, {
    params: {
      page: 1,
      limit: 3,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_INFO_ADMIN, payload: res.data });
};

// Search User
export const searchAdmin = (token, query) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/users/search/query`, {
    params: {
      q: query,
    },

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({ type: SEARCH_INFO_ADMIN, payload: res.data });
};

///delete
export const deleteAdminRequest = () => {
  return {
    type: DELETE_INFO_REQUEST,
  };
};

export const deleteAdminSuccess = (data) => {
  return {
    type: DELETE_INFO_SUCCESS,
    payload: data,
  };
};
export const deleteAdminFailed = (error) => {
  return {
    type: DELETE_INFO_FAILED,
    payload: error,
  };
};

export const deleteAdmin = (fields, token) => (dispatch) => {
  dispatch(deleteAdminRequest());
  Axios.delete(`${URL_ADM}/info/delete/${fields.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(deleteAdminSuccess(res.data));
    })
    .catch((error) => {
      dispatch(deleteAdminFailed(error.message));
    });
};

// Edit Admin
export const editAdminRequest = () => {
  return {
    type: EDIT_INFO_REQUEST,
  };
};

export const editAdminSuccess = (data) => {
  return {
    type: EDIT_INFO_SUCCESS,
    payload: data,
  };
};
export const editAdminFailed = (error) => {
  return {
    type: EDIT_INFO_FAILED,
    payload: error,
  };
};

export const editAdmin = (fields, token) => async (dispatch) => {
  dispatch(editAdminRequest());
  try {
    const res = await Axios.patch(
      `${URL_ADM}/info/update/${fields.id}`,
      {
        title: fields.title,
        description: fields.description,
        photographer: fields.photographer,
        category: fields.category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editAdminSuccess(res.data));
  } catch (error) {
    dispatch(editAdminFailed(error.message));
  }
};

export const editPhotoAdmin = (data, id, token) => async (dispatch) => {
  const res = await Axios.patch(`${URL_ADM}/info/change/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: EDIT_PHOTO, payload: res.data });
};
