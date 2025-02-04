import axios from "axios";

const authBase = axios.create({
  baseURL: "http://localhost:8000/api",
});

authBase.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default authBase;
