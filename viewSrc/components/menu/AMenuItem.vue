<template>
  <!-- <dd class="menu-item" :class="{active}">
    <Icon class="menu-icon" :name="icon" v-if="icon"/>
    <router-link class="menu-link fc-link-black" :to="to" v-if="to">{{title}}</router-link>
    <a href="#" class="menu-link fc-link-black" v-else>{{title}}</a>
  </dd>-->
  <router-link tag="dd" class="a-menu-item" :to="to || '#'" :class="{active}">
    <AIcon class="a-menu-icon" :name="icon" v-if="icon"/>
    <span class="a-menu-link">{{title}}</span>
  </router-link>
</template>
<script>
import AIcon from "@/components/AIcon";
export default {
  name: "a-menu-item",
  components: {
    AIcon
  },
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    to: {
      type: String
    }
  }
};
</script>
<style lang="scss">
@import "./var.scss";
.a-menu-item {
  line-height: 34px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  .a-menu-icon {
    position: absolute;
    left: 1.1 * $indent;
    top: 0;
  }
}

.a-menu-item.active {
  color: $primary-light;
  .a-menu-link {
    color: $primary-light;
  }
}

.a-menu-item::before {
  display: inline-block;
  background-color: red;
  content: "";
  vertical-align: middle;
  width: $indent * 1.6;
}

.a-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
