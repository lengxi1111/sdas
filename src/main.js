import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "./styles/index.less"; //导入全局less
import "amfe-flexible"; //导入flexible

Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
