import Axios from "@/utils/request";

const API_URL = {
  list: "/api/routes/list",
};
export const routesListApi = () => {
  return Axios.request({
    url: API_URL.list,
    method: "get",
  });
};
