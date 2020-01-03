import { quakeConstants } from "../constants";

export function creation(state = {}, action) {
  switch (action.type) {
    // addQuake
    case quakeConstants.CREATE_QUAKE_REQUEST:
      return { saving: true };
    case quakeConstants.CREATE_QUAKE_SUCCESS:
      return { saving: false };
    case quakeConstants.CREATE_QUAKE_FAILURE:
      return {};

    default:
      return state;
  }
}
