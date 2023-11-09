import { useUserStore } from "@/store/user/user";
// import { useRoutesStore } from "./routes/routes";
// 统一导出useStore方法
export function useStore() {
  return {
    user: useUserStore(),
    // useRoutesStore: useRoutesStore(),
  };
}
