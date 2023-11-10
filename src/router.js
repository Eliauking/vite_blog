import { createWebHashHistory, createRouter } from "vue-router";
import LocalCache from "@/utils/localCache";
const Routes = [
  {
    path: "/",
    redirect: "/home",
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
LocalCache.getCache("userInfo").routesList.forEach((item, index) => {
  let children = {};
  if (item.parentId) {
    children = item;
  }
  Router.addRoute({
    path: item.path,
    name: item.name,
    component: () => import(/* @vite-ignore */ `./view/${item.component}`),
    meta: {},
    children: {
      path: children.path,
      name: children.name,
      component: () =>
        import(/* @vite-ignore */ `./view/${children.component}`),
    },
  });
});

console.log(Router.options.routes);
export default Router;
