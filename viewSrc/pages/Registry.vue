<template>
  <div class="desktop flex-center">
    <h1 class="mb-4">博客注册</h1>
    <ACard class="login-box" style="margin:0 auto;">
      <AInput v-model="form.username" title="用户名" :clearable="true" placeholder="请输入用户名"></AInput>
      <AInput v-model="form.realname" title="真实姓名" :clearable="true" placeholder="请输入真实姓名"></AInput>
      <AInput
        :rightIcon="toggleIcon"
        @clickRight="togglePassword"
        v-model="form.password"
        :type="showPassword?'text':'password'"
        title="密码"
        :clearable="true"
        placeholder="请输入密码"
      ></AInput>
      <AInput
        :rightIcon="toggleIcon"
        @clickRight="togglePassword"
        v-model="form.repeatPassword"
        :type="showPassword?'text':'password'"
        title="确认密码"
        :clearable="true"
        placeholder="请再次输入密码"
      ></AInput>
      <div class="flex-center">
        <AButton @click="registry" style="width:100px;" class="mr-4">注册</AButton>
        <AButton style="width:100px;" @click="$router.push({name:'login'})" type="warning">去登录</AButton>
      </div>
    </ACard>
    <router-link class="fc-link mt-2" tag="a" :to="{name:'home'}">UI文档</router-link>
  </div>
</template>

<script>
import ACard from "@/components/ACard";
import { AInput, AButton } from "@/components/form";
import { mapMutations } from "vuex";

export default {
  name: "registry",
  components: { ACard, AInput, AButton },
  data() {
    return {
      form: {
        username: "",
        realname: "",
        password: "",
        repeatPassword: ""
      },
      showPassword: false
    };
  },
  computed: {
    toggleIcon() {
      return this.showPassword ? "eye" : "eye-close";
    }
  },
  methods: {
    ...mapMutations(["setUsername", "setRealname"]),
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    registry() {
      if (
        !this.form.username ||
        !this.form.realname ||
        !this.form.password ||
        !this.form.repeatPassword
      ) {
        return this.$notify({ msg: "必填项不能为空" });
      }

      if (this.form.password !== this.form.repeatPassword)
        return this.$notify({ msg: "前后密码不一致" });

      this.$post("/api/user/registry", this.form).then(({ data }) => {
        if (data.errno === 0) {
          this.$router.push({ name: "blogs" });
        } else {
          this.$notify({ msg: data.msg });
        }
      });
    }
  }
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
  padding: 20px 50px;
  padding-top: 40px;
  box-sizing: border-box;
}
</style>
