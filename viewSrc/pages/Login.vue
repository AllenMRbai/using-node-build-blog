<template>
  <div class="desktop flex-center">
    <h1 class="mb-4">博客登录</h1>
    <ACard class="login-box px-4 py-6" style="margin:0 auto;"></ACard>
    <router-link class="fc-link mt-2" tag="a" :to="{name:'home'}">查看文档</router-link>
  </div>
</template>

<script>
import ACard from "@/components/ACard";
export default {
  name: "login",
  components: { ACard }
};
</script>
<style lang="scss" scoped>
.desktop {
  width: 100vw;
  height: 100vh;
  align-content: center;
  flex-direction: column;
}

.login-box {
  max-width: 450px;
  min-width: 300px;
  box-sizing: border-box;
}
</style>
