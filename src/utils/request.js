import axios from "axios";

const Axios = axios.create({
  baseURL: "",
  timeout: 10000,
});

//请求拦截器
Axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
//响应拦截器
Axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Axios;
