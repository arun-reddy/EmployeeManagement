import {
  ADD_EMPLOYEE,
  GET_EMPLOYEE,
  SUCCESS_SUFFIX,
  FAILURE_SUFFIX,
  DELETE_EMPLOYEE
} from "../actions/employeeActions";
const initialState = {
  employees: [],
  isLoading: false,
  addFailed: false,
  updateFailed: false,
  deleteFailed: false,
  getFailed: false,
  message: ""
};
const employeeReducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, isLoading: true, addFailed: false, message: "" };
    case ADD_EMPLOYEE + SUCCESS_SUFFIX:
      return {
        ...state,
        isLoading: false,
        addFailed: false,
        message: action.payload.message
      };
    case ADD_EMPLOYEE + FAILURE_SUFFIX:
      return {
        ...state,
        isLoading: false,
        addFailed: true,
        message: action.payload.message
      };
    case GET_EMPLOYEE:
      return { ...state, isLoading: true, getFailed: false, message: "" };
    case GET_EMPLOYEE + SUCCESS_SUFFIX:
      return {
        ...state,
        isLoading: false,
        getFailed: false,
        employees: action.payload.data
      };
    case GET_EMPLOYEE + FAILURE_SUFFIX:
      return {
        ...state,
        isLoading: false,
        getFailed: true,
        message: action.payload.message
      };
    case DELETE_EMPLOYEE:
      return { ...state, isLoading: true, getFailed: false, message: "" };
    case DELETE_EMPLOYEE + SUCCESS_SUFFIX:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_EMPLOYEE + FAILURE_SUFFIX:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
export default employeeReducer;
