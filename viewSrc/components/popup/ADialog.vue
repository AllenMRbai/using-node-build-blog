<template>
  <div class="a-dialog-mask" :style="{'z-index':id}">
    <div class="a-dialog-board">
      <h3 class="a-dialog-title" v-if="title">{{title}}</h3>
      <p class="a-dialog-msg">{{msg}}</p>
      <div class="flex-end px-2 pb-3">
        <AButton @click="cancelHandler" v-if="type==='confirm'" type="plain">{{cancel}}</AButton>
        <AButton @click="okHandler" type="primary" class="ml-3">{{ok}}</AButton>
      </div>
    </div>
  </div>
</template>
<script>
import { AButton } from "@/components/form";
export default {
  name: "a-dialog",
  components: {
    AButton
  },
  props: {
    type: {
      type: String,
      default: "alert"
    },
    id: String,
    title: String,
    msg: String,
    ok: {
      type: String,
      default: "确定"
    },
    onOk: Function,
    cancel: {
      type: String,
      default: "取消"
    },
    onCancel: Function
  },
  methods: {
    cancelHandler() {
      this.$emit("close", this.id);
      if (this.onCancel) this.onCancel.call(this);
    },
    okHandler() {
      this.$emit("close", this.id);
      if (this.onOk) this.onOk.call(this);
    }
  }
};
</script>
<style lang="scss">
@import "./var.scss";
.a-dialog-mask {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.a-dialog-board {
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-sizing: border-box;
  min-width: 230px;
  border-radius: 2px;
}
.a-dialog-title {
  padding: 8px 8px;
  border-bottom: 1px solid $border;
}
.a-dialog-msg {
  padding: 20px 8px;
}
</style>