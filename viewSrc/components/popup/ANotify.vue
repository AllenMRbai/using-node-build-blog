<template>
  <div :class="`bc-${type}`" class="a-notify">
    <div class="flex-start">
      <AIcon class="a-notify-icon" v-if="icon" :name="icon"></AIcon>
      <span class="a-notify-msg">{{msg}}</span>
      <AIcon @click.native="close" class="a-notify-close" name="close-circle-fill"></AIcon>
    </div>
  </div>
</template>
<script>
import AIcon from "@/components/AIcon";
export default {
  name: "a-notify",
  components: {
    AIcon
  },
  props: {
    id: String,
    type: {
      type: String,
      default: "primary"
    },
    msg: String,
    icon: String,
    timeout: {
      type: Number,
      default: 5000
    }
  },
  timmer: null,
  methods: {
    close() {
      if (this.timmer) clearTimeout(this.timmer);
      this.$emit("close", this.id);
    }
  },
  mounted() {
    this.timmer = setTimeout(() => {
      this.$emit("close", this.id);
    }, this.timeout);
  },
  beforeDestroy() {
    if (this.timmer) clearTimeout(this.timmer);
  }
};
</script>
<style lang="scss" >
.a-notify {
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-50%);
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 2px;
  margin-top: 8px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
  animation: showup 1s;
  position: relative;
  .a-notify-icon {
    font-size: 22px;
    margin-right: 6px;
  }
  .a-notify-close {
    font-size: 14px;
    position: relative;
    right: -6px;
  }
}

@keyframes showup {
  from {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }
  to {
    opacity: 1;
  }
}
</style>
