<template>
  <div>
    <div class="a-notification-list">
      <ANotify @close="closeNotify" v-for="(nt,id) of notifys" :key="id" v-bind="nt" :id="id"></ANotify>
    </div>
    <ADialog @close="closeDialog" v-for="(dl,id) of dialogs" :key="id" v-bind="dl" :id="id"></ADialog>
  </div>
</template>
<script>
import Vue from "vue";
import ANotify from "./ANotify";
import ADialog from "./ADialog";

let notifyOpts = {
  type: "danger",
  msg: "",
  icon: "",
  timeout: 5000
};

let alertOpts = {
  type: "alert",
  title: "",
  msg: "",
  ok: "确定",
  onOk: null
};

let confirmOpts = {
  type: "confirm",
  title: "",
  msg: "",
  ok: "确定",
  cancel: "取消",
  onOk: null,
  onCancel: null
};

let notifyId = 999999;

let dialogId = 998;

let APopup = Vue.extend({
  name: "a-popup",
  components: {
    ANotify,
    ADialog
  },
  data() {
    return {
      notifys: {},
      dialogs: {}
    };
  },
  methods: {
    notify(opts) {
      let id = notifyId--;
      opts = Object.assign({}, notifyOpts, opts);
      this.$set(this.notifys, id, opts);
    },
    closeNotify(id) {
      this.$delete(this.notifys, id);
    },
    alert(opts) {
      let id = dialogId++;
      opts = Object.assign({}, alertOpts, opts);
      this.$set(this.dialogs, id, opts);
    },
    confirm(opts) {
      let id = dialogId++;
      opts = Object.assign({}, confirmOpts, opts);
      console.log(opts);
      this.$set(this.dialogs, id, opts);
    },
    closeDialog(id) {
      this.$delete(this.dialogs, id);
    }
  }
});

export default APopup;
</script>

<style lang="scss">
.a-notification-list {
  position: fixed;
  left: 50%;
  top: 0;
  width: 1px;
  height: 1px;
  background-color: blue;
  text-align: center;
}
</style>
