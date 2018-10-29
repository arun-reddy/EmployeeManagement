import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/employee";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const LIST_EMPLOYEE = "LIST_EMPLOYEE";
export const SUCCESS_SUFFIX = "_SUCCESS";
export const FAILURE_SUFFIX = "_FAILED";

export const getEmployees = () => {
  return dispatch => {
    getEmployeeLoading();
    return axios
      .get(API_URL)
      .then(response => {
        dispatch(getEmployeeSuccess(response.data));
      })
      .catch(error => {
        getEmployeeFailed(error.data);
      });
  };
};

export const getEmployeeLoading = () => {
  return {
    type: GET_EMPLOYEE ,
    payload: {
    }
  };
};
export const getEmployeeSuccess = (data = {}) => {
  return {
    type: GET_EMPLOYEE + SUCCESS_SUFFIX,
    payload: {
      ...data
    }
  };
};
export const getEmployeeFailed = (data = {}) => {
  return {
    type: GET_EMPLOYEE + FAILURE_SUFFIX,
    payload: {
      message: data.message
    }
  };
};

export const addEmployee = (employee, callBack) => {
  addEmployeeLoading()
  return dispatch => {
    return axios
      .post(API_URL, employee)
      .then(response => {
        dispatch(addEmployeeSuccess(response));
        callBack(response.data);
      })
      .catch(error => {
        dispatch(addEmployeeFailed(error));
        callBack(error.data);
      });
  };
};

export const addEmployeeLoading = (data = {}) => {
  return {
    type: ADD_EMPLOYEE ,
    payload: {
      ...data
    }
  };
};

export const addEmployeeSuccess = data => {
  return {
    type: ADD_EMPLOYEE + SUCCESS_SUFFIX,
    payload: {
      message: data.message
    }
  };
};
export const addEmployeeFailed = data => {
  return {
    type: ADD_EMPLOYEE + FAILURE_SUFFIX,
    payload: {
      message: data.message
    }
  };
};
export const updateEmployee = (id, employee, callBack) => {
  updateEmployeeLoading();
  return dispatch => {
    return axios
      .put(`${API_URL}/${id}`, employee)
      .then(response => {
        dispatch(updateEmployeeSuccess(response.data));
        callBack(response.data);
      })
      .catch(error => {
        dispatch(updateEmployeeFailed(error.data));
        callBack(error.data);
      });
  };
};

export const updateEmployeeLoading = (data = {}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {
    }
  };
};

export const updateEmployeeSuccess = (data={}) => {
  return {
    type: UPDATE_EMPLOYEE + SUCCESS_SUFFIX,
    payload: {
      message: data.message
    }
  };
};
export const updateEmployeeFailed = (data={}) => {
  return {
    type: UPDATE_EMPLOYEE + FAILURE_SUFFIX,
    payload: {
      message: data.message
    }
  };
};

export const deleteEmployee = (id, callBack) => {
  deleteEmployeeLoading();
  return dispatch => {
    return axios
      .delete(`${API_URL}/${id}`)
      .then(response => {
        dispatch(deleteEmployeeSuccess(response.data));
        callBack(response.data);
      })
      .catch(error => {
        dispatch(deleteEmployeeFailed(error.data));
        callBack(error.data);
      });
  };
};

export const deleteEmployeeLoading = (data = {}) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: {
    }
  };
};

export const deleteEmployeeSuccess = (data={}) => {
  return {
    type: DELETE_EMPLOYEE + SUCCESS_SUFFIX,
    payload: {
      message: data.message
    }
  };
};
export const deleteEmployeeFailed = (data={}) => {
  return {
    type: DELETE_EMPLOYEE + FAILURE_SUFFIX,
    payload: {
      message: data.message
    }
  };
};
