import { defineStore } from "pinia";
import { routesListApi } from "@/api/index";
import Router from "@/router";
export const useUserStore = defineStore({
  id: "userInfo",
  state: () => ({
    userInfo: {},
    routesList: [],
  }),
  getters: {},
  actions: {
    async getRoutesList() {
      const res = await routesListApi();
      if (res.code == 200) {
        this.routesList = res.data;
      }
    },
  },
  // 所有数据持久化
  persist: true,
});
