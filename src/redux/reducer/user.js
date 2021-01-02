import { GET_USER, USER_LOGOUT } from "../type/user";

const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        data: action.payload.data[0],
      };
    case USER_LOGOUT:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
