import { alert, confirm, notify } from "@/components/popup";

export default function popupPlugin(Vue) {
  Vue.prototype.$alert = alert;
  Vue.prototype.$confirm = confirm;
  Vue.prototype.$notify = notify;
}
