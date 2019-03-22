<template>
  <main class="a-main">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: "a-main"
};
</script>
<style lang="scss">
@import "./var.scss";
.a-main {
  margin-left: $sidebar_w;
}
</style>
