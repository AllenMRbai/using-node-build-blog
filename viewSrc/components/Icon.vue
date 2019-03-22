<template>
  <i class="iconfont" :class="[`icon-${name}`]"></i>
</template>

<script>
export default {
  name: "icon",
  props: {
    name: {
      type: String,
      default: "smile"
    }
  }
};
</script>

