import { quakeConstants } from "../constants";
import { QuakeService } from "../services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

export const quakeConstants = {
    CREATE_QUAKE_REQUEST: "CREATE_QUAKE_REQUEST",
    CREATE_QUAKE_SUCCESS: "CREATE_QUAKE_SUCCESS",
    CREATE_QUAKE_FAILURE: "CREATE_QUAKE_FAILURE",
  
    QUAKE_UPDATE_REQUEST: "QUAKE_UPDATE_REQUEST",
    QUAKE_UPDATE_SUCCESS: "QUAKE_UPDATE_SUCCESS",
    QUAKE_UPDATE_FAILURE: "QUAKE_UPDATE_FAILURE",
  
    GET_ALL_QUAKES_REQUEST: "GET_ALL_QUAKES_REQUEST",
    GET_ALL_QUAKES_SUCCESS: "GET_ALL_QUAKES_SUCCESS",
    GET_ALL_QUAKES_FAILURE: "GET_ALL_QUAKES_FAILURE",
  
    GET_QUAKE_REQUEST: "GET_QUAKE_REQUEST",
    GET_QUAKE_SUCCESS: "GET_QUAKE_SUCCESS",
    GET_QUAKE_FAILURE: "GET_QUAKE_FAILURE",
  
    DELETE_QUAKE_REQUEST: "DELETE_QUAKE_REQUEST",
    DELETE_QUAKE_SUCCESS: "DELETE_QUAKE_SUCCESS",
    DELETE_QUAKE_FAILURE: "DELETE_QUAKE_FAILURE"
  };
  

 
      // coor: data.coor,
      // time: data.time 
function createQuakeRequest(data) {
    return {
      type: types.CREATE_QUAKE_REQUEST,
      name: data.name,
      mag: data.mag
    };
  }

  function createQuakeSuccess() {
    return {
      type: types.CREATE_QUAKE_SUCCESS
    };
  }
  
  function createTopicFailure(data) {
    return {
      type: types.CREATE_QUAKE_FAILURE,
      id: data.id,
      error: data.error
    };
  }

export function createQuake(name)


function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    QuakeService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: quakeConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: quakeConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: quakeConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  QuakeService.logout();
  return { type: quakeConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    QuakeService.register(user).then(
      user => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: quakeConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: quakeConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: quakeConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    QuakeService.getAll().then(
      users => dispatch(success(users)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: quakeConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: quakeConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: quakeConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    QuakeService.delete(id).then(
      user => dispatch(success(id)),
      error => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: quakeConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: quakeConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: quakeConstants.DELETE_FAILURE, id, error };
  }
}
