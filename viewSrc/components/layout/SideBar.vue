<template>
  <aside class="side-bar">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: "sidebar"
};
</script>
<style lang="scss" scoped>
@import "./var.scss";
.side-bar {
  width: $sidebar_w;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(241, 241, 241);
  border-right: 1px solid $border;
}
.side-bar::before {
  content: "";
  height: $header_h;
  display: block;
}
</style>