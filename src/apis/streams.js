import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:5000",
});

const createStream = (formObj) => {
  return api.post("/streams", formObj);
};

const editStream = (id, formObj) => {
  return api.patch(`/streams/${id}`, formObj);
};

const fetchStream = (id) => {
  return api.get(`/streams/${id}`);
};

const fetchStreams = () => {
  return api.get(`/streams`);
};

const deleteStream = (id) => {
  return api.delete(`/streams/${id}`);
};
export default {
  createStream,
  editStream,
  fetchStream,
  fetchStreams,
  deleteStream,
};
