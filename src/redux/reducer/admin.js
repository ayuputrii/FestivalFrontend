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

const initialState = {
  dataAdmin: [],
  loading: false,
  messageEdit: "",
  isEditSuccess: false,
  isEditFailed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Get Admin
    case GET_INFO_ADMIN:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    // Create Admin
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailed: false,
        message: "Create Data Success",
      };
    case CREATE_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailed: true,
        message: action.payload.message,
      };

    // Search Admin
    case SEARCH_INFO_ADMIN:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    // Edit Info Admin
    case EDIT_PHOTO:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload.message,
        dataAdmin: action.payload.data,
        isEditSuccess: true,
        isEditFailed: false,
      };

    // Edit Info Admin
    case EDIT_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload.message,
        dataAdmin: action.payload.data,
        isEditSuccess: true,
        isEditFailed: false,
      };
    case EDIT_INFO_FAILED:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload,
        isEditSuccess: false,
        isEditFailed: true,
      };

    // Delete Admin
    case DELETE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        dataAdmin: action.payload.message,
      };
    case DELETE_INFO_FAILED:
      return {
        ...state,
        loading: false,
        dataAdmin: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
