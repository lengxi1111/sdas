import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/index.less"; //导入全局less
import "amfe-flexible"; //导入flexible
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
