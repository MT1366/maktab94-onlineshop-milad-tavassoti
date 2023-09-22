import axios from "axios";
import { BASE_URL } from "../../src/configs/constants";
import { useCookies } from "react-cookie";
// import { useCookies } from "react-cookie";

const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const [cookies, setCookie] = useCookies("accessToken");
    console.log(cookies);
    if (config.method === "post") {
      config.headers["Authorization"] = `Bearer ${cookies.accessToken}`;
    }
    // if (config.method === "get") {
    //   config.headers["Authorization"] = `Bearer ${cookies.accessToken}`;
    // }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// tinymce-react

// privateAxios.interceptors.request.use(
//   (config) => {
//     const [cookies] = useCookies(["accessToken"]);
//     console.log(cookies);
//     console.log(config);
//     const accessToken = cookies("accessToken");

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// privateAxios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (error) => {
//     const originalConfig = error.config;

//     console.log(originalConfig);
//     if (error.response) {
//       // 401
//       if (error.response?.status === 500 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const currentRefreshToken = Cookies.get("refreshToken");
//           const res = await refreshToken(currentRefreshToken);
//           const accessToken = res.token.accessToken;
//           if (accessToken) {
//             Cookies.set("accessToken", accessToken);
//             return privateAxios(originalConfig);
//           }
//         } catch (err) {
//           return Promise.reject(err);
//         }
//       }
//     }
//   }
// );

export default privateAxios;
