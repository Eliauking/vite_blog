import { createWebHashHistory, createRouter } from "vue-router";

const Routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/view/home.vue"),
  },
];
const Router = createRouter({
  history: createWebHashHistory(),
  //切换路由后滚动行为
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return {
        top: savePosition?.top,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
  routes: Routes,
});

export default Router;
