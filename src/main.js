import { createApp } from "vue";
import Router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //pinia 持久化插件
import ElementPlus from "element-plus"; // element
import App from "./App.vue";
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(ElementPlus);
app.use(Router);
app.mount("#app");
