import { SEARCH_BY_NAME } from "../type/search";

const initialState = {
  data: [],
  searchInfo: {
    title: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
