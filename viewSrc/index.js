import Vue from "vue";
import App from "./App";
import router from "./router";
import "./main.scss";

new Vue({
  render: h => h(App),
  router
}).$mount(document.getElementById("root"));
