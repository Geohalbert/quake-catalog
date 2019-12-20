import { quakeConstants } from "../constants";

export function quakes(state = {}, action) {
  switch (action.type) {
    // getAllQuakes
    case quakeConstants.GETALL_REQUEST:
      return {
        gathering: true
      };
    case quakeConstants.GETALL_SUCCESS:
      return {
        items: action.quakes
      };
    case quakeConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    // getQuakeById
    case quakeConstants.GET_REQUEST:
      return {
        gathering: true
      };
    case quakeConstants.GET_SUCCESS:
      return {
        items: action.quakes
      };
    case quakeConstants.GET_FAILURE:
      return {
        error: action.error
      };

    //updateQuakeById
    case quakeConstants.QUAKES_UPDATE_REQUEST:
      return {
        ...state,
        items: state.items.map(quake =>
          quake.id === action.id ? { ...quake, updating: true } : quake
        )
      };
    case quakeConstants.QUAKES_UPDATE_SUCCESS:
      return {
        items: state.items.filter(quake => quake.id !== action.id)
      };
    case quakeConstants.QUAKES_UPDATE_FAILURE:
      return {
        ...state,
        items: state.items.map(quake => {
          if (quake.id === action.id) {
            // make copy of quake without 'updating:true' property
            const { updating, ...quakeCopy } = quake;
            // return copy of quake with 'updateError:[error]' property
            return { ...quakeCopy, updateError: action.error };
          }

          return quake;
        })
      };

    //deleteQuakeById
    case quakeConstants.QUAKES_DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(quake =>
          quake.id === action.id ? { ...quake, deleting: true } : quake
        )
      };
    case quakeConstants.QUAKES_DELETE_SUCCESS:
      return {
        items: state.items.filter(quake => quake.id !== action.id)
      };
    case quakeConstants.QUAKES_DELETE_FAILURE:
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
