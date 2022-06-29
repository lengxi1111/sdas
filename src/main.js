import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "./styles/index.less"; //导入全局less
import "amfe-flexible"; //导入flexible
		// 加载 dayjs 初始化配置
    import './utils/dayjs'
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");