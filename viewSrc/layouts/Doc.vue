<template>
  <div>
    <AHeader class="pa-2 px-6">
      <div slot="left" class="flex-start">
        <h1 class="title fc-white">UI 文档</h1>
      </div>
      <div slot="right">
        <router-link class="fc-link-white" :to="{name:'login'}" style="vertical-align:middle">
          <AIcon name="logout"/>
          <span style="ml-1">登出</span>
        </router-link>
      </div>
    </AHeader>
    <AAside>
      <AMenu class="pt-4">
        <template v-for="menu of menus">
          <AMenuTitle :icon="menu.icon" :title="menu.title" :key="menu.title"/>
          <AMenuItem
            v-for="item of menu.children"
            :key="item.title"
            :title="item.title"
            :icon="item.icon"
            :to="item.to"
            :active="nowPath===item.to"
          />
        </template>
      </AMenu>
    </AAside>
    <AMain class="pa-4">
      <router-view/>
    </AMain>
  </div>
</template>

<script>
import { AAside, AMain, AHeader } from "@/components/layout";
import { AMenu, AMenuItem, AMenuTitle } from "@/components/menu";
import AIcon from "@/components/AIcon";

export default {
  name: "doc",
  components: {
    AAside,
    AMain,
    AHeader,
    AIcon,
    AMenu,
    AMenuItem,
    AMenuTitle
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
  computed: {
    nowPath() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss">
</style>
