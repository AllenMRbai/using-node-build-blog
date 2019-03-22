<template>
  <i class="iconfont" :class="[`icon-${name}`]"></i>
</template>

<script>
export default {
  name: "a-icon",
  props: {
    name: {
      type: String
    }
  }
};
</script>

