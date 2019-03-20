<template>
  <div>
    <header>
      <ul>
        <li>
          <router-link tag="li" :to="{name:'admin'}">admin</router-link>
          <router-link tag="li" :to="{name:'blogs'}">blogs</router-link>
          <router-link tag="li" :to="{name:'detail'}">detail</router-link>
          <router-link tag="li" :to="{name:'edit'}">edit</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main"
};
</script>

