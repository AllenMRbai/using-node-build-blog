<template>
  <header class="flex-between a-header shadow-1-bottom bc-primary">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  name: "a-header"
};
</script>
<style lang="scss">
@import "./var.scss";
.a-header {
  color: #fff;
  height: $header-h;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
}
</style>