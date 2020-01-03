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

    case quakeConstants.DELETE_QUAKE_REQUEST:
      // add 'deleting:true' property to quake being deleted
      return {
        ...state,
        items: state.items.map(quake =>
          quake.id === action.id ? { ...quake, deleting: true } : quake
        )
      };
    case quakeConstants.DELETE_QUAKE_SUCCESS:
      // remove deleted quake from state
      return {
        items: state.items.filter(quake => quake.id !== action.id)
      };
    case quakeConstants.DELETE_QUAKE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to quake
      return {
        ...state,
        items: state.items.map(quake => {
          if (quake.id === action.id) {
            // make copy of quake without 'deleting:true' property
            const { deleting, ...quakeCopy } = quake;
            // return copy of quake with 'deleteError:[error]' property
            return { ...quakeCopy, deleteError: action.error };
          }
          return quake;
        })
      };

    default:
      return state;
  }
}
