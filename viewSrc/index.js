import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/iconfont/iconfont.css";
import "./main.scss";

import "./plugins";

new Vue({
  render: h => h(App),
  router,
  store
}).$mount(document.getElementById("root"));
