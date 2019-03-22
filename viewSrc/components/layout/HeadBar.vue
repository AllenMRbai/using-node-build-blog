<template>
  <header class="flex-between header-bar shadow-1-bottom bc-primary">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  name: "headerbar"
};
</script>
<style lang="scss" scoped>
@import "./var.scss";
.header-bar {
  color: #fff;
  height: $header-h;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
}
</style>