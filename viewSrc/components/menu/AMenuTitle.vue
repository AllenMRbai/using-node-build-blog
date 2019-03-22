<template>
  <dd class="a-menu-title">
    <AIcon class="a-menu-icon" :name="icon" v-if="icon"/>
    <span class="subtitle fc-primary-dark">{{title}}</span>
  </dd>
</template>
<script>
import AIcon from "@/components/AIcon";
export default {
  name: "a-menu-title",
  components: {
    AIcon
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
<style lang="scss">
@import "./var.scss";
.a-menu-title {
  color: $primary-dark;
  line-height: 40px;
  position: relative;
  .a-menu-icon {
    position: absolute;
    left: 0.35 * $indent;
    font-size: 16px;
    top: 1px;
  }
}

.a-menu-title::before {
  display: inline-block;
  background-color: red;
  content: "";
  vertical-align: middle;
  width: $indent;
}
</style>
