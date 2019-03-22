import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/iconfont/iconfont.css";
import "./main.scss";

new Vue({
  render: h => h(App),
  router
}).$mount(document.getElementById("root"));
