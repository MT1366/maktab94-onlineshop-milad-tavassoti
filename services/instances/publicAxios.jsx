import axios from "axios";
import { BASE_URL } from "../../configs/constants.js";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const publicAxios = axios.create({
  baseURL: BASE_URL,
});

publicAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

publicAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      toast.error(error.response.data.error);
    }
    return Promise.reject(error);
  }
);

export default publicAxios;
