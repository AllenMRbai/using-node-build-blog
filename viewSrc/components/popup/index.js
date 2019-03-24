import APopup from "./APopup";
import APopover from "./APopover";

let rootDomId = "a-popup-root-dom";

let rootDom = document.getElementById(rootDomId);

if (!rootDom) {
  rootDom = document.createElement("div");
  rootDom.setAttribute("id", rootDomId);
  document.body.appendChild(rootDom);
}

let instance = new APopup();

window.instance = instance; // TODO 方便测试

instance.$mount(rootDom);

let alert = instance.alert.bind(instance);
let confirm = instance.confirm.bind(instance);
let notify = instance.notify.bind(instance);

export { alert, confirm, notify, APopover };
