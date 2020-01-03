import { quakeConstants } from "../constants";
import QuakeServices from "../services/QuakeServices";
// import { history } from "../history";

const quakeActions = {
  getAll
};

function getAll() {
  return dispatch => {
    dispatch(request());

    QuakeServices.getAllQuakes().then(
      res => dispatch(success(res.data.data)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: quakeConstants.GET_ALL_QUAKES_REQUEST };
  }
  function success(quakes) {
    return { type: quakeConstants.GET_ALL_QUAKES_SUCCESS, quakes };
  }
  function failure(error) {
    return { type: quakeConstants.GET_ALL_QUAKES_FAILURE, error };
  }
}

export default quakeActions;
