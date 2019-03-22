<template>
  <div class="card border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card"
};
</script>

<style lang="scss" scoped>
.card {
  width: 90%;
  border-radius: 4px;
}
</style>
