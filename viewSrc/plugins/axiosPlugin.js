import axios, { get, post } from "@/lib/axios";

export default function axiosPlugin(Vue) {
  Vue.prototype.$axios = axios;
  Vue.prototype.$get = get;
  Vue.prototype.$post = post;
}
