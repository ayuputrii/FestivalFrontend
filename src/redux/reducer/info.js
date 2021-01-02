import { GET_ALL, GET_PAGINATION } from "../type/info";

const initialState = {
  dataInfo: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        dataInfo: action.payload.data,
      };
    case GET_PAGINATION:
      return {
        ...state,
        dataInfo: action.payload.data,
      };
    default:
      return state;
  }
};
