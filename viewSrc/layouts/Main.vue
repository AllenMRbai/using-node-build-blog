<template>
  <div>
    <AHeader class="pa-2 px-6">
      <router-link
        tag="div"
        :to="{name:'blogs'}"
        slot="left"
        class="flex-start"
        style="cursor:pointer"
      >
        <img style="width:38px;height:38px;" class="mr-1" src="@/assets/logo.svg" alt="logo">
        <h1 class="title" style="color:#fff;">博客圆</h1>
      </router-link>
      <div slot="right" class="flex-end">
        <!-- <router-link class="fc-link-white" :to="{name:'login'}" style="vertical-align:middle">
          <AIcon name="logout"/>
          <span style="ml-1">登出</span>
        </router-link>-->
        <template v-if="!username">
          <router-link class="fc-link-white" :to="{name:'login'}">登录</router-link>
          <span class="mx-2">|</span>
          <router-link class="fc-link-white" :to="{name:'login'}">注册</router-link>
        </template>
        <template v-else>
          <router-link class="fc-link-white mr-3" :to="{name:'edit',params:{type:'create'}}">
            <AIcon name="plus"/>写博客
          </router-link>
          <APopover>
            <AIcon name="user"/>
            <span>{{realname}}</span>
            <ul slot="popover" class="fc-regular px-2 py-2">
              <li style="white-space:nowrap;" @click="logout">
                <AIcon name="logout"/>
                <span style="ml-1">登出</span>
              </li>
            </ul>
          </APopover>
        </template>
      </div>
    </AHeader>
    <div class="paper" style="margin:0 auto;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { AAside, AMain, AHeader } from "@/components/layout";
import { AMenu, AMenuItem, AMenuTitle } from "@/components/menu";
import { APopover } from "@/components/popup";
import AIcon from "@/components/AIcon";
import { mapActions, mapState } from "vuex";

export default {
  name: "main-layout",
  components: {
    AAside,
    AMain,
    AHeader,
    AIcon,
    AMenu,
    AMenuItem,
    AMenuTitle,
    APopover
  },
  data() {
    return {
      menus: [
        {
          title: "Home",
          children: [{ title: "Introduction", to: "/doc/Home" }]
        },
        {
          title: "CSS & SASS Variables",
          children: [
            { title: "Spacing", to: "/doc/spacing" },
            { title: "CSS Helpers", to: "/doc/cssHelper" },
            { title: "SASS Variables", to: "/doc/sassVar" }
          ]
        },
        {
          title: "Components",
          children: [
            { title: "Layout", to: "/doc/layout" },
            { title: "Menu", to: "/doc/Menu" },
            { title: "Icon", to: "/doc/Icon" },
            { title: "Form Components", to: "/doc/FormComp" },
            { title: "Dialog", to: "/doc/Dialog" },
            { title: "Other Components", to: "/doc/OtherComp" }
          ]
        }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchUserInfo", "logout"]),
    logoutHandler() {
      this.logout();
      this.$router.push({ name: "blogs" });
    }
  },
  computed: {
    ...mapState(["username", "realname"]),
    nowPath() {
      return this.$route.path;
    }
  },
  mounted() {
    this.fetchUserInfo();
  }
};
</script>

<style lang="scss">
</style>
