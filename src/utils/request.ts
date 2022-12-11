import axios from "axios";
import router from "@/router/routerIndex";
//import BigInt from 'json-bigint';
import { getUser } from "./store";
import { ElMessage } from "element-plus";
import { API_USERIMAGES_ADD } from "@/constants/api";
const request = axios.create({
  baseURL: "/admin",
  timeout: 10000,
  /* transformResponse(data: any) {
    if (data) {
      return BigInt.parse(data);
    }
  }, */
});
const IsImage = (config: any) => {
  return config.url === API_USERIMAGES_ADD && config.method === "post";
};
request.interceptors.request.use(
  (config: any) => {
    const Authorization = getUser();
    if (Authorization && Authorization.token) {
      if (IsImage(config)) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }
      config.headers.token = Authorization.token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response: any) => {
    if (response.data && response.data.code) {
      const code = response.data.code;
      if (code > 49 && code < 70) {
        router.replace({ path: "/login" });
      }
    }
    return response.data;
  },
  (error: any) => {
    let message = "";
    const code = error.response ? error.response.status : "";
    switch (code) {
      case 400:
        message = "请求参数错误";
        break;
      case 401:
        message = "token过期或未传";
        break;
      case 403:
        message = "操作失败";
        break;
      case 404:
        message = "手机号不正确";
        break;
      case 500:
        message = "服务器异常";
        break;
      case 507:
        message = "服务器数据库异常";
        break;
      default:
        message = "处理异常";
    }
    ElMessage({
      message,
      type: "warning",
      onClose:
        code == "401" ? () => router.replace({ path: "/login" }) : () => {},
    });
    return new Promise(() => {});
  }
);
export default request;
