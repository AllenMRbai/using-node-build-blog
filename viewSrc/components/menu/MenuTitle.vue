<template>
  <dd class="menu-title">
    <Icon class="menu-icon" :name="icon" v-if="icon"/>
    <span class="subtitle fc-primary-dark">{{title}}</span>
  </dd>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "menu-title",
  components: {
    Icon
  },
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./var.scss";
.menu-title {
  color: $primary-dark;
  line-height: 40px;
  position: relative;
}
.menu-icon {
  position: absolute;
  left: 0.35 * $indent;
  font-size: 16px;
  top: 1px;
}
.menu-title::before {
  display: inline-block;
  background-color: red;
  content: "";
  vertical-align: middle;
  width: $indent;
}
</style>
