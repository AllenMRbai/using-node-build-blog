import Vue from "vue";
import axiosPlugin from "./axiosPlugin";
import popupPlugin from "./popupPlugin";
import filters from "./filters";

Vue.use(axiosPlugin);
Vue.use(popupPlugin);
Vue.use(filters);
