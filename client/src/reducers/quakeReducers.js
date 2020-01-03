import { quakeConstants } from "../constants";

export function quakes(state = {}, action) {
  switch (action.type) {
    // getAllQuakes
    case quakeConstants.GET_ALL_QUAKES_REQUEST:
      return {
        isLoading: true
      };
    case quakeConstants.GET_ALL_QUAKES_SUCCESS:
      return {
        items: action.quakes,
        isLoading: false
      };
    case quakeConstants.GET_ALL_QUAKES_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
}
