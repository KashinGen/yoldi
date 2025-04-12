import axios from "axios";
import { API_URL } from "../const";
import { redirect } from "next/navigation";
import { sessionService } from "./session";

export const baseAxiosConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosInstance = axios.create(baseAxiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const xApiKey = sessionService.get();
  if (xApiKey) {
    config.headers["x-api-key"] = xApiKey;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionService.remove();
      redirect("/auth");
    }
    return Promise.reject(error);
  },
);

export { axiosInstance };
