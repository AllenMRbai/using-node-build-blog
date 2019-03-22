<template>
  <aside class="a-aside">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: "a-aside"
};
</script>
<style lang="scss">
@import "./var.scss";
.a-aside {
  width: $sidebar_w;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(241, 241, 241);
  border-right: 1px solid $border;
}
.a-aside::before {
  content: "";
  height: $header_h;
  display: block;
}
</style>