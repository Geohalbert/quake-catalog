import { quakeConstants } from "../constants";
import QuakeServices from "../services/QuakeServices";
import { alertActions } from "./";
// import { history } from "../history";

const quakeActions = {
  getAll,
  createQuake
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

function createQuake(quake) {
  return dispatch => {
    dispatch(request(quake));

    QuakeServices.addQuake(quake).then(
      quake => {
        dispatch(success(quake));
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(quake) {
    return { type: quakeConstants.CREATE_QUAKE_REQUEST, quake };
  }
  function success(quake) {
    return { type: quakeConstants.CREATE_QUAKE_SUCCESS, quake };
  }
  function failure(error) {
    return { type: quakeConstants.CREATE_QUAKE_FAILURE, error };
  }
}

export default quakeActions;
