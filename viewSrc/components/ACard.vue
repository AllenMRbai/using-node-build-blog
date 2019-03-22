<template>
  <div class="a-card border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "a-card"
};
</script>

<style lang="scss" scoped>
.a-card {
  width: 90%;
  background-color: #fff;
  border-radius: 4px;
}
</style>
