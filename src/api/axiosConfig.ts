import axios from "axios";

const BASE_URL = import.meta.env.BACKEND_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
