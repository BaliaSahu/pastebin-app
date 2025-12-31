const BASE_URL = "http://localhost:8080";
import axios from "axios";

export const healthCheck = () => {
  return fetch("http://localhost:8080/api/healthz");
};

export const createPaste = (data) => {
  console.log(data)
  return api.post("/api/pastes", data);
};

export const getPaste = (id) => {
  return api.get(`/api/pastes/${id}`);
};

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

