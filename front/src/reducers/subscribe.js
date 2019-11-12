import {
  ADD_SUBSCRIBER,
  CLOSE_MODAL,
  ADD_SUBSCRIBER_ERROR,
  IS_LOADING_SUBSCRIBER,
} from "../actions/action";

export const initialState = {
  subscriber: {},
  isLoading: false,
  isModalOpen: false,
  message: "",
  isError: false,
  errorDetails: "",
  isMailSent: false
};

export function subscribeReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING_SUBSCRIBER:
      return {
        ...state,
        isLoading: action.payload,
      }
    case ADD_SUBSCRIBER:
      return {
        ...state,
        ...action.payload,
        isModalOpen: true,
        isLoading: false,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...action.payload,
        isModalOpen: false
      };
    case ADD_SUBSCRIBER_ERROR:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isModalOpen: true,
        isMailSent: false,
      };
    default:
      return state;
  }
}
