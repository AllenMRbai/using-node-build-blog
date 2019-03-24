<template>
  <div @click="toggle" class="a-popover-btn">
    <slot></slot>
    <div style="position:absolute;left:0;right:0;bottom:0;height:0;">
      <div class="a-popover" :style="{display:visible?'block':'none'}">
        <slot name="popover"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import AIcon from "@/components/AIcon";
export default {
  name: "a-popover",
  props: {
    items: {
      type: Array // item {title:'aaa',icon:'aaa',onClick:()=>{}}
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggle(evt) {
      evt.stopPropagation();
      this.visible = !this.visible;
    }
  },
  mounted() {
    this.handler = evt => {
      this.visible = false;
    };
    document.body.addEventListener("click", this.handler);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.handler);
  }
};
</script>
<style lang="scss">
.a-popover-btn {
  cursor: pointer;
  position: relative;
}
.a-popover {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>

