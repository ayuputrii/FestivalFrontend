import Axios from "axios";
import { SEARCH_BY_NAME } from "../type/search";
import { URI } from "../../utils";

export const searchByName = (token, query) => async (dispatch) => {
  const res = await Axios.get(`${URI}/info/search/query`, {
    params: {
      q: query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: SEARCH_BY_NAME, payload: res.data });
};
