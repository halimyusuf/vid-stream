import api from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formObj) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await api.createStream({ ...formObj, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await api.fetchStreams();
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await api.fetchStream(id);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formObj) => async (dispatch) => {
  const response = await api.editStream(id, formObj);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await api.deleteStream(id);
  dispatch({ type: DELETE_STREAM, payload: id });
};
