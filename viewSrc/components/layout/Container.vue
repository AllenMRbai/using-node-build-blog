<template>
  <main class="container">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: "container"
};
</script>
<style lang="scss" scoped>
@import "./var.scss";
.container {
  margin-left: $sidebar_w;
}
</style>
