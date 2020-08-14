import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
  ADD_SMURF
} from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
      };
    case ADD_SMURF:
      return{
        ...state,
       loading: false,
       smurfs: action.payload
      }

    default:
      return state;
  }
}
