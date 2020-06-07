import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.4:1234/",
});

export default api;