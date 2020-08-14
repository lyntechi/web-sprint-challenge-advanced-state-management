import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log("Error happend with api", error);
      dispatch({ type: FETCH_SMURF_ERROR, payload: error.message });
    });
};
