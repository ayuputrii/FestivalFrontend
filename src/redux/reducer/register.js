import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../type/register";

const initialState = {
  data: {
    username: "",
    email: "",
    password: "",
  },
  loading: false,
  isFormFilled: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        message: action.payload,
      };
    default:
      return {
        ...state,
        isFormFilled: false,
      };
  }
};
