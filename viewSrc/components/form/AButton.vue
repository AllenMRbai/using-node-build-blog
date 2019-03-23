<template>
  <button
    @click="clickHandler"
    type="button"
    class="a-button--transparent a-button"
    :class="[`a-button-${type}`,`a-button-${size}`]"
    v-bind="$attrs"
  >
    <div class="a-button-wrapper flex-around">
      <div class="a-ripple"></div>
      <span>
        <slot></slot>
      </span>
    </div>
  </button>
</template>
<script>
export default {
  name: "a-button",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md" // sm md lg
    }
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss">
@import "./var.scss";

.a-button {
  color: #fff;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  &:active {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    .a-ripple {
      opacity: 0.15;
    }
  }
}

.a-button-wrapper {
  position: relative;
  padding: 0 10px;
}
.a-ripple {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
  background-color: #fff;
}

.a-button-sm {
  font-size: 12px;
  line-height: 28px;
}

.a-button-md {
  font-size: 14px;
  line-height: 34px;
}

.a-button-lg {
  font-size: 16px;
  line-height: 40px;
}

.a-button-primary {
  background-color: $primary;
  border: 1px solid $primary;
}
.a-button-primary-dark {
  background-color: $primary-dark;
  border: 1px solid $primary-dark;
}
.a-button-primary-light {
  background-color: $primary-light;
  border: 1px solid $primary-light;
}
.a-button-secondary {
  background-color: $secondary;
  border: 1px solid $secondary;
}
.a-button-secondary-dark {
  background-color: $secondary-dark;
  border: 1px solid $secondary-dark;
}
.a-button-secondary-light {
  background-color: $secondary-light;
  border: 1px solid $secondary-light;
}
.a-button-success {
  background-color: $success;
  border: 1px solid $success;
}
.a-button-warning {
  background-color: $warning;
  border: 1px solid $warning;
}
.a-button-danger {
  background-color: $danger;
  border: 1px solid $danger;
}
.a-button-info {
  background-color: $info;
  border: 1px solid $info;
}
.a-button-plain {
  background-color: #fff;
  border: 1px solid $border;
  color: $regular-text;
}
</style>
