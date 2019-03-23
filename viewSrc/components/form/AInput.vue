<template>
  <div class="a-input-field">
    <div class="a-input-title" v-if="title">{{title}}</div>
    <label class="a-input-label flex-between">
      <button @click="clickLeft" v-if="leftIcon" class="a-input-icon-btn a-button--transparent">
        <AIcon class="a-input-icon" :name="leftIcon"/>
      </button>
      <input v-bind="$attrs" class="a-input" :type="type" :value="value" @input="inputHandler">
      <button
        @click="clearInput"
        v-if="showClearBtn"
        class="a-input-icon-btn a-button--transparent"
      >
        <AIcon class="a-input-icon" name="close-circle-fill"/>
      </button>
      <button @click="clickRight" v-if="rightIcon" class="a-input-icon-btn a-button--transparent">
        <AIcon class="a-input-icon" :name="rightIcon"/>
      </button>
      <button class="a-button--transparent">
        <slot name="right"></slot>
      </button>
    </label>
    <div class="a-input-error"></div>
  </div>
</template>
<script>
import AIcon from "../AIcon";
export default {
  name: "a-input",
  components: {
    AIcon
  },
  props: {
    rightIcon: String,
    leftIcon: String,
    value: String,
    title: String,
    type: {
      type: String,
      default: "text"
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showClearBtn() {
      return this.clearable && this.value.length > 0;
    }
  },
  methods: {
    clickLeft(evt) {
      return this.$listeners.clickLeft && this.$listeners.clickLeft(evt);
    },
    clickRight(evt) {
      return this.$listeners.clickRight && this.$listeners.clickRight(evt);
    },
    inputHandler(evt) {
      this.$emit("input", evt.target.value);
    },
    clearInput() {
      this.$emit("input", "");
    }
  }
};
</script>
<style lang="scss">
@import "./var.scss";

.a-input-title {
  font-size: 14px;
  color: $primary;
}
.a-input-error {
  $h: 24px;
  color: $danger;
  height: $h;
  line-height: $h;
  box-sizing: border-box;
}

// 普通状态
.a-input-label {
  border-bottom: 2px solid $border;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: $primary;
    transition: all 0.4s;
  }
  .a-input {
    padding: 8px 0;
    width: 100%;
    flex: 1;
    color: $title-text;
  }
  .a-input-icon-btn {
    padding: 5px 2px;
  }
  .a-input-icon {
    font-size: 18px;
    color: $caption-text;
  }
  button {
    padding: 8px 2px;
  }
}

// 聚焦状态
.a-input-label:focus-within {
  &::after {
    left: 0;
    width: 100%;
  }
  .a-input-icon {
    color: $primary;
  }
}
</style>
