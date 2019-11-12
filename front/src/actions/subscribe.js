import axios from "axios";

import { ADD_SUBSCRIBER, CLOSE_MODAL, ADD_SUBSCRIBER_ERROR, IS_LOADING_SUBSCRIBER } from "./action";

//ADD SUBSCRIBE
export function addSubscriber(email) {
  return dispatch => {
    dispatch({
      type: IS_LOADING_SUBSCRIBER,
      payload: true,
    });
    axios
      .post("/subscribe/add-subscriber", { email })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: ADD_SUBSCRIBER,
            payload: res.data
          });
        }
      })
      .catch(error => {
        dispatch({
          type: ADD_SUBSCRIBER_ERROR,
          payload: error.response.data
        });
      });
  };
}

export function closeModal() {
  return dispatch => {
    dispatch({
      type: CLOSE_MODAL
    });
  };
}
